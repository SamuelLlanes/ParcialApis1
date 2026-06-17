import { ServicioService } from '../servicio/servicio.service';
export declare class PublicController {
    private readonly servicioService;
    constructor(servicioService: ServicioService);
    findAllServices(): Promise<{
        id: number;
        title: string;
        category: string;
        description: string;
        price: number;
        freelancer: string;
    }[]>;
}
