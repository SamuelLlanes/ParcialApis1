import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioService } from './servicio.service';
import { ServicioController } from './servicio.controller';
import { Servicio } from './entities/servicio.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Servicio, Usuario]), AuthModule],
  controllers: [ServicioController],
  providers: [ServicioService],
  exports: [TypeOrmModule, ServicioService],
})
export class ServicioModule {}
