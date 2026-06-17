import { DataSource } from 'typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';

export const seedUsuario = async (dataSource: DataSource) => {
  const usuarioRepository = dataSource.getRepository(Usuario);

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
