import { Servicio } from '../../servicio/entities/servicio.entity';
export declare class Usuario {
    id: number;
    email: string;
    name: string;
    password: string;
    servicios: Servicio[];
}
