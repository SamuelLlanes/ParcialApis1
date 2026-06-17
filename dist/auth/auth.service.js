"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const usuario_service_1 = require("../usuario/usuario.service");
const constant_1 = require("./constant");
let AuthService = class AuthService {
    usuarioService;
    jwtService;
    constructor(usuarioService, jwtService) {
        this.usuarioService = usuarioService;
        this.jwtService = jwtService;
    }
    async login(email, password) {
        if (!email || !password) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const usuario = await this.usuarioService.findByEmail(email);
        if (!usuario || usuario.password !== password) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const payload = { sub: usuario.id, email: usuario.email, name: usuario.name };
        const token = await this.jwtService.signAsync(payload, { secret: constant_1.JWT_SECRET });
        return {
            access_token: token,
            usuario: {
                id: usuario.id,
                email: usuario.email,
                name: usuario.name,
            },
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map