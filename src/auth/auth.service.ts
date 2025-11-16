import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
  import * as bcrypt from 'bcrypt';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../user/entities/user.entity';

import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) {}

  // -----------------------------------------------------
  // 🔹 REGISTRAR USUARIO
  // -----------------------------------------------------
  async register(dto: RegisterDto) {
    const existing = await this.userRepo.findOne({
      where: { email: dto.email },
    });

    if (existing) {
      throw new ConflictException('Ese correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const newUser = this.userRepo.create({
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      role: dto.role || 'user', // admin | moderador | user
    });

    await this.userRepo.save(newUser);

    return {
      message: 'Usuario registrado exitosamente',
      user: { id: newUser.id, email: newUser.email, role: newUser.role },
    };
  }

  // -----------------------------------------------------
  // 🔹 LOGIN (con last_login)
  // -----------------------------------------------------
  async login(dto: LoginDto) {
    const user = await this.userRepo.findOne({
      where: { email: dto.email },
    });

    if (!user) throw new NotFoundException('Usuario no encontrado');

    const isValid = await bcrypt.compare(dto.password, user.password);
    if (!isValid) throw new UnauthorizedException('Contraseña incorrecta');

    // 🔥 Actualizar último login
    user.last_login = new Date();
    await this.userRepo.save(user);

    // Crear token JWT
    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      message: 'Login exitoso',
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }

  // ------------------------
  // 🔹 ENVIAR CORREO DE RECUPERACIÓN
  // ------------------------
  async forgotPassword(dto: ForgotPasswordDto) {
  const user = await this.userRepo.findOne({
    where: { email: dto.email },
  });

  if (!user) throw new NotFoundException('Usuario no encontrado');

  const token = this.jwtService.sign(
    { email: user.email },
    { expiresIn: '30m' },
  );

  const resetLink = `http://localhost:3000/auth/reset-password?token=${token}`;


  await this.mailerService.sendMail({
    to: user.email,
    subject: 'Recuperación de contraseña',
    template: './reset-password', // nombre del template SIN .hbs
    context: {
      name: user.name,     // 👈 Debe coincidir con {{name}}
      resetLink: resetLink // 👈 Debe coincidir con {{resetLink}}
    },
  });

  return { message: 'Correo enviado correctamente' };
}



  // ------------------------
  // 🔹 RESTABLECER CONTRASEÑA
  // ------------------------
  async resetPassword(dto: ResetPasswordDto) {
    try {
      const payload = this.jwtService.verify(dto.token);

      const user = await this.userRepo.findOne({
        where: { email: payload.email },
      });

      if (!user) throw new NotFoundException('Usuario no encontrado');

      user.password = await bcrypt.hash(dto.newPassword, 10);
      await this.userRepo.save(user);

      return { message: 'Contraseña actualizada exitosamente' };
    } catch (error) {
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }
}
