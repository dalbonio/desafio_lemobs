import { createConnection } from 'typeorm';
import { Aluno } from '../entities/aluno.entity'
import { Endereco } from '../entities/endereco.entity'


export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'username',
      password: 'password',
      database: 'desafio',
      entities: [
          Aluno, Endereco
      ],
      synchronize: true,
    }),
  },
];
