import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { User } from '../user/entities/user.entity';
import { WiseChat } from '../wise-chat/entities/wise-chat.entity';
import { HuggingFaceService } from '../wise-chat/huggingface.provider';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepo: Repository<Message>,

    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,

    @InjectRepository(WiseChat)
    private readonly chatRepo: Repository<WiseChat>,

    private readonly huggingFace: HuggingFaceService,
  ) {}

  async create(dto: CreateMessageDto) {
    const user = await this.usersRepo.findOne({ where: { id: dto.userId } });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    const chat = await this.chatRepo.findOne({ where: { id: dto.wiseChatId } });
    if (!chat) throw new NotFoundException('Chat no encontrado');

    // Análisis IA (opcional)
    const sentiment = await this.huggingFace.analyze(dto.content);

    const message = this.messageRepo.create({
      user,
      wiseChat: chat,
      content: dto.content,
      status: 'active',
    });

    return this.messageRepo.save(message);
  }

  findByChat(chatId: string | number) {
    const id = typeof chatId === 'string' ? Number(chatId) : chatId;
    return this.messageRepo.find({
      where: { wiseChat: { id } },
      relations: ['user', 'wiseChat'],
      order: { creation_date: 'ASC' },
    });
  }
}
