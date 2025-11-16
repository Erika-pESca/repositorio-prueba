import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { Notification } from '../notification/entities/notification.entity';

@Injectable()
export class UserCronService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(Notification)
    private readonly notificationRepo: Repository<Notification>,
  ) {}

  /* Este método será llamado por el CRON cada mes*/
  async checkInactiveUsers() {
    const users = await this.userRepo.find();

    const now = new Date();

    for (const user of users) {
      if (!user.last_login) continue;

      const diffMonths =
        (now.getFullYear() - user.last_login.getFullYear()) * 12 +
        (now.getMonth() - user.last_login.getMonth());

      // --- 11 MESES SIN ENTRAR: enviar notificación mensual ---
      if (diffMonths >= 11 && diffMonths < 12) {
        await this.notificationRepo.save({
          user,
          message:
            'Tu cuenta será inactivada si no ingresas durante el próximo mes.',
          status: 'unread',
        });
      }

      // --- 12 MESES SIN ENTRAR: inactivar usuario ---
      if (diffMonths >= 12 && user.status !== 'inactive') {
        user.status = 'inactive';
        await this.userRepo.save(user);

        await this.notificationRepo.save({
          user,
          message:
            'Tu cuenta ha sido inactivada por inactividad de 1 año.',
          status: 'unread',
        });
      }
    }
  }
} 

