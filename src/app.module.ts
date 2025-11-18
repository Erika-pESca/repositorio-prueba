import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

// Módulos de tu aplicación
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { WiseChatModule } from './wise-chat/wise-chat.module';
import { HistorialModule } from './historial/historial.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'mind_connectIA',

      // Mucho mejor que poner entities manualmente
      autoLoadEntities: true,

      synchronize: true,
      logging: true,
    }),

    // Registrar todos los módulos
    UserModule,
    MessageModule,
    WiseChatModule,
    HistorialModule,
    NotificationModule,

    ScheduleModule.forRoot(),
  ],
})
export class AppModule {
  constructor() {
    console.log('➡️ Base de datos conectada correctamente ✔️');
  }
}
