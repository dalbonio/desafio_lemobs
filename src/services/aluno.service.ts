import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Aluno } from '../entities/aluno.entity';
import { Endereco } from '../entities/endereco.entity';
import { arrayExpression } from '@babel/types';

@Injectable()
export class AlunoService {
  constructor( @Inject('ALUNO_REPOSITORY') private readonly alunoRepository: Repository<Aluno>,
               @Inject('ENDERECO_REPOSITORY') private readonly enderecoRepository: Repository<Endereco> ) {}

  async insertAluno(nome: string, data_nasc: Date, cpf: string, nota: number): Promise<Aluno> {
    const aluno = new Aluno()
    aluno.nome = nome
    aluno.cpf = cpf
    aluno.data_nascimento = data_nasc
    aluno.nota = nota
    return await this.alunoRepository.save(aluno);
  }

  async updateAluno(nome: string, data: string, cpf: string, nota: number, id: number): Promise<{}> {
    const data_nasc = new Date(data)
    const updatedAluno = {id: id}
    if(nome != undefined){
      updatedAluno["nome"] = nome
    }
    if(cpf != undefined){
      updatedAluno["cpf"] = cpf
    }
    if(data != undefined){
      updatedAluno["data"] = data_nasc
    }
    if(nota != undefined){
      updatedAluno["nota"] = nota
    }

    return await this.alunoRepository.update(id, updatedAluno);
  }

  async getEnderecosOfAluno(id: number): Promise<Endereco[]>{
    const enderecos = await this.enderecoRepository
                                  .createQueryBuilder("endereco")
                                  .where("endereco.aluno_id = :id", {id: id})
                                  .getMany()
    return enderecos
  }

  async getAlunosByCriterio(nota: number, criterio: string): Promise<Aluno[]>{
    if(criterio == ">"){
      return await this.alunoRepository
                                  .createQueryBuilder("aluno")
                                  .where("aluno.nota >= :nota", {nota: nota})
                                  .getMany()
    }
    else if(criterio == "<"){
      return await this.alunoRepository
                                  .createQueryBuilder("aluno")
                                  .where("aluno.nota <= :nota", {nota: nota})
                                  .getMany()
    }
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
    const alunos = await this.alunoRepository.find();
    //map all alunos.cpf to replaced regex
    const alunosFormattedCPF = alunos.map( (aluno) => ({id: aluno.id,
                                                        nome: aluno.nome,
                                                        cpf: aluno.cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/,"$1.$2.$3-$4"),
                                                        data_nascimento: aluno.data_nascimento,
                                                        nota: aluno.nota,
                                                        enderecos: undefined}) )
    return alunosFormattedCPF
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