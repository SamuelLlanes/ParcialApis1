import { Controller, Get } from '@nestjs/common';
import { ServicioService } from '../servicio/servicio.service';

@Controller('public')
export class PublicController {
  constructor(private readonly servicioService: ServicioService) {}

  @Get('services')
  async findAllServices() {
    const servicios = await this.servicioService.findAll();

    return servicios.map((s) => ({
      id: s.id,
      title: s.title,
      category: s.category,
      description: s.description,
      price: s.price,
      freelancer: s.provider?.name ?? null,
    }));
  }
}
