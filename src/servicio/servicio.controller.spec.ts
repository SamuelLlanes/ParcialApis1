import { Test, TestingModule } from '@nestjs/testing';
import { ServicioController } from './servicio.controller';
import { ServicioService } from './servicio.service';
import { JwtService } from '@nestjs/jwt';

describe('ServicioController', () => {
  let controller: ServicioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicioController],
      providers: [
        {
          provide: ServicioService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            remove: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: { verifyAsync: jest.fn() },
        },
      ],
    }).compile();

    controller = module.get<ServicioController>(ServicioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
