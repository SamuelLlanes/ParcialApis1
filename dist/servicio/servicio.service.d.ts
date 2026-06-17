import { Repository } from 'typeorm';
import { Servicio } from './entities/servicio.entity';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { Usuario } from '../usuario/entities/usuario.entity';
export declare class ServicioService {
    private readonly servicioRepository;
    private readonly usuarioRepository;
    constructor(servicioRepository: Repository<Servicio>, usuarioRepository: Repository<Usuario>);
    create(createServicioDto: CreateServicioDto, providerId: number): Promise<Servicio>;
    findAll(): Promise<Servicio[]>;
    findOne(id: number): Promise<Servicio>;
    remove(id: number): Promise<Servicio>;
}
