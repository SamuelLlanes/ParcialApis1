import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('services')
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createServicioDto: CreateServicioDto, @Req() req: any) {
    const providerId = req.user.sub;
    return this.servicioService.create(createServicioDto, providerId);
  }
}
