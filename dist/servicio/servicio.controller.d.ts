import { ServicioService } from './servicio.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
export declare class ServicioController {
    private readonly servicioService;
    constructor(servicioService: ServicioService);
    create(createServicioDto: CreateServicioDto, req: any): Promise<import("./entities/servicio.entity").Servicio>;
}
