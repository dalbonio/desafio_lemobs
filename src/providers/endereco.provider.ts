import { Connection, Repository } from 'typeorm';
import { Endereco } from '../entities/endereco.entity';

export const enderecoProviders = [
  {
    provide: 'ENDERECO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Endereco),
    inject: ['DATABASE_CONNECTION'],
  },
];
