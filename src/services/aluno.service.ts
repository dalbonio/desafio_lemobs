import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Aluno } from '../entities/aluno.entity';
import { Endereco } from '../entities/endereco.entity';
import { arrayExpression } from '@babel/types';

@Injectable()
export class AlunoService {
  constructor( @Inject('ALUNO_REPOSITORY') private readonly alunoRepository: Repository<Aluno> ) {}

  async insertAluno(nome: string, data_nasc: Date, cpf: string, nota: number): Promise<Aluno> {
    const aluno = new Aluno()
    aluno.nome = nome
    aluno.cpf = cpf
    aluno.data_nascimento = data_nasc
    aluno.nota = nota
    return await this.alunoRepository.save(aluno);
  }

  // async updateAluno(nome: string, data_nasc: Date, cpf: string, nota: number, aluno_id: number): Promise<Aluno> {
  //   const aluno = new Aluno()
  //   aluno.nome = nome
  //   aluno.cpf = cpf
  //   aluno.data_nascimento = data_nasc
  //   aluno.nota = nota
  //   return await this.alunoRepository.update({nome: nome, cpf: cpf, data_nascimento: data_nasc, nota: nota}, {id: aluno_id});
  // }

  async getAllAlunos(): Promise<Aluno[]> {
    return await this.alunoRepository.find();
  }

  async getAlunoById(id: number): Promise<Aluno> {
    return await this.alunoRepository.findOne(id);
  }

  async getAllAlunosBetterThanAverage(): Promise<Aluno[]> {
    const alunos = await this.alunoRepository.find();

    const total = alunos.reduce( (prev: Aluno, acc: {nota: number}) => ({nota: prev.nota + acc.nota}), {nota: 0})
    const length = alunos.length
    const avg = total.nota / length
    return alunos.filter( (element) => element.nota >= avg )
  }
}