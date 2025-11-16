/*Ejecuta un cron todos los días

Busca usuarios cuya última actividad sea mayor a 11 meses (para enviar aviso mensual)

Después de 12 meses → los vuelve inactivos*/
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Notification } from '../notification/entities/notification.entity';

@Injectable()
export class UserCronService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,

    @InjectRepository(Notification)
    private notificationRepo: Repository<Notification>,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async checkInactiveUsers() {
    const now = new Date();

    const users = await this.userRepo.find();

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
          message: 'Tu cuenta ha sido inactivada por inactividad de 1 año.',
          status: 'unread',
        });
      }
    }
  }
}
