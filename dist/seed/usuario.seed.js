"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUsuario = void 0;
const usuario_entity_1 = require("../usuario/entities/usuario.entity");
const seedUsuario = async (dataSource) => {
    const usuarioRepository = dataSource.getRepository(usuario_entity_1.Usuario);
    const existing = await usuarioRepository.findOneBy({ email: 'freelancer@demo.com' });
    if (existing) {
        console.log('Usuario seed ya existe, omitiendo...');
        return;
    }
    const usuario = usuarioRepository.create({
        email: 'freelancer@demo.com',
        name: 'Ana Freelancer',
        password: '1234',
    });
    await usuarioRepository.save(usuario);
    console.log('Usuario seed creado: freelancer@demo.com / 1234');
};
exports.seedUsuario = seedUsuario;
//# sourceMappingURL=usuario.seed.js.map