import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Aluno } from '../entities/aluno.entity';
import { Endereco } from 'src/entities/endereco.entity';

@Injectable()
export class AlunoService {
  constructor( @Inject('ALUNO_REPOSITORY') private readonly alunoRepository: Repository<Aluno> ) {}

  insertAluno(nome: string, idade: number): Aluno {
    const aluno = new Aluno()
    aluno.nome = nome
    aluno.cpf = "150"
    aluno.data_nascimento = new Date()
    aluno.enderecos = [new Endereco()]
    return aluno;
  }
}