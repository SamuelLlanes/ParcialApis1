import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicio } from './entities/servicio.entity';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class ServicioService {
  constructor(
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createServicioDto: CreateServicioDto, providerId: number) {
    if (!createServicioDto || !createServicioDto.title || !createServicioDto.category || !createServicioDto.description || createServicioDto.price === undefined || createServicioDto.price === null) {
      throw new BadRequestException('Todos los campos (title, category, description, price) son obligatorios.');
    }

    const provider = await this.usuarioRepository.findOneBy({ id: providerId });
    if (!provider) throw new NotFoundException(`Usuario proveedor #${providerId} no encontrado`);

    const servicio = this.servicioRepository.create({
      ...createServicioDto,
      provider,
    });
    return this.servicioRepository.save(servicio);
  }

  findAll() {
    return this.servicioRepository.find({
      relations: { provider: true },
      select: {
        id: true,
        title: true,
        category: true,
        description: true,
        price: true,
        provider: { id: true, name: true },
      },
    });
  }

  async findOne(id: number) {
    const servicio = await this.servicioRepository.findOne({
      where: { id },
      relations: { provider: true },
    });
    if (!servicio) throw new NotFoundException(`Servicio #${id} no encontrado`);
    return servicio;
  }

  async remove(id: number) {
    const servicio = await this.findOne(id);
    return this.servicioRepository.remove(servicio);
  }
}
