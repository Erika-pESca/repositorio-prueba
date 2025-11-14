import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Historial } from './entities/historial.entity';
import { CreateHistorialDto } from './dto/create-historial.dto';
import { UpdateHistorialDto } from './dto/update-historial.dto';

@Injectable()
export class HistorialService {
  constructor(
    // Inyecta el repositorio de la entidad Historial para interactuar con la base de datos
    @InjectRepository(Historial)
    private repo: Repository<Historial>,
  ) {}

  // Crea un registro nuevo usando el DTO
  create(data: CreateHistorialDto) {
    // Genera una instancia nueva con los datos recibidos
    const item = this.repo.create(data);
    // Guarda el registro en la base de datos
    return this.repo.save(item);
  }

  // Obtiene todos los registros
  findAll() {
    return this.repo.find();
  }

  // Obtiene un registro por ID
  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  // Actualiza un registro y retorna el actualizado
  async update(id: number, data: UpdateHistorialDto) {
    // Aplica la actualización
    await this.repo.update(id, data);
    // Devuelve el registro actualizado
    return this.findOne(id);
  }

  // Elimina un registro por ID
  delete(id: number) {
    return this.repo.delete(id);
  }
}

//Importante.

    


