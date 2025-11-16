import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { Historial } from '../historial/entities/historial.entity';
import { Notification } from '../notification/entities/notification.entity';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserCronService } from './user-cron.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([User, Historial, Notification]),
  ],
  controllers: [UserController],
  providers: [UserService, UserCronService],
  exports: [UserService],
})
export class UserModule {}

