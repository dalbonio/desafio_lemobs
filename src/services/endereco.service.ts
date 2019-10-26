import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Aluno } from '../entities/aluno.entity';
import { Endereco } from '../entities/endereco.entity';

@Injectable()
export class EnderecoService {
  constructor( @Inject('ENDERECO_REPOSITORY') private readonly enderecoRepository: Repository<Endereco>,
               @Inject('ALUNO_REPOSITORY') private readonly alunoRepository: Repository<Aluno> ) {}

  insertTurma(valor: number, id_aluno: number ): Endereco {
    const endereco = new Endereco()
    endereco.bairro = "b"
    endereco.complemento = "c"
    endereco.numero = "n"
    endereco.rua = "r"
    endereco.aluno = new Aluno()
    return endereco;
  }
}