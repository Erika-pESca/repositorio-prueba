import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Historial } from './entities/historial.entity';
import { CreateHistorialDto } from './dto/create-historial.dto';
import { UpdateHistorialDto } from './dto/update-historial.dto';

@Injectable()
export class HistorialService {
  constructor(
    @InjectRepository(Historial)
    private repo: Repository<Historial>,
  ) {}

  create(data: CreateHistorialDto) {
    const item = this.repo.create(data);
    return this.repo.save(item);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateHistorialDto) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}
