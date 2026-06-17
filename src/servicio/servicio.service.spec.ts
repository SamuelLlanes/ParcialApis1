import { Test, TestingModule } from '@nestjs/testing';
import { ServicioService } from './servicio.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Servicio } from './entities/servicio.entity';
import { Usuario } from '../usuario/entities/usuario.entity';

describe('ServicioService', () => {
  let service: ServicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServicioService,
        {
          provide: getRepositoryToken(Servicio),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            remove: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(Usuario),
          useValue: {
            findOneBy: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ServicioService>(ServicioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
