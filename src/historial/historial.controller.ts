import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { HistorialService } from './historial.service';
import { CreateHistorialDto } from './dto/create-historial.dto';
import { UpdateHistorialDto } from './dto/update-historial.dto';

@Controller('historial')  
// Define el prefijo de la ruta: /historial
export class HistorialController {
  constructor(private readonly service: HistorialService) {}
  // Inyecta el servicio para manejar la lógica de base de datos

  @Post()
  // Crea un nuevo registro
  create(@Body() dto: CreateHistorialDto) {
    // Recibe los datos del cuerpo y los pasa al servicio
    return this.service.create(dto);
  }

  @Get()
  // Obtiene todos los registros
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  // Obtiene un registro específico por ID
  findOne(@Param('id') id: string) {
    // Convierte el parámetro string a número con "+"
    return this.service.findOne(+id);
  }

  @Patch(':id')
  // Actualiza un registro específico
  update(@Param('id') id: string, @Body() dto: UpdateHistorialDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  // Elimina un registro por ID
  delete(@Param('id') id: string) {
    return this.service.delete(+id);
  }
}





