"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const servicio_service_1 = require("./servicio.service");
const servicio_controller_1 = require("./servicio.controller");
const servicio_entity_1 = require("./entities/servicio.entity");
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
const auth_module_1 = require("../auth/auth.module");
let ServicioModule = class ServicioModule {
};
exports.ServicioModule = ServicioModule;
exports.ServicioModule = ServicioModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([servicio_entity_1.Servicio, usuario_entity_1.Usuario]), auth_module_1.AuthModule],
        controllers: [servicio_controller_1.ServicioController],
        providers: [servicio_service_1.ServicioService],
        exports: [typeorm_1.TypeOrmModule, servicio_service_1.ServicioService],
    })
], ServicioModule);
//# sourceMappingURL=servicio.module.js.map