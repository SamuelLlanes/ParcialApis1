import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import { JWT_SECRET } from './constant';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    if (!email || !password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const usuario = await this.usuarioService.findByEmail(email);

    if (!usuario || usuario.password !== password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = { sub: usuario.id, email: usuario.email, name: usuario.name };
    const token = await this.jwtService.signAsync(payload, { secret: JWT_SECRET });

    return {
      access_token: token,
      usuario: {
        id: usuario.id,
        email: usuario.email,
        name: usuario.name,
      },
    };
  }
}
