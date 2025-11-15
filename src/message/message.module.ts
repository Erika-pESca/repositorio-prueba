import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { User } from '../../users/entities/user.entity';
import { WiseChat } from '../../wise-chat/entities/wise-chat.entity';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { HuggingFaceService } from '../../wise-chat/huggingface.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User, WiseChat])],
  controllers: [MessageController],
  providers: [MessageService, HuggingFaceService],
})
export class MessageModule {}
