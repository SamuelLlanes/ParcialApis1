import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Servicio } from '../../servicio/entities/servicio.entity';

@Entity({ name: 'usuario' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(() => Servicio, (servicio) => servicio.provider)
  servicios: Servicio[];
}
