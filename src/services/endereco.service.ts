import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Aluno } from '../entities/aluno.entity';
import { Endereco } from '../entities/endereco.entity';

@Injectable()
export class EnderecoService {
  constructor( @Inject('ENDERECO_REPOSITORY') private readonly enderecoRepository: Repository<Endereco>,
               @Inject('ALUNO_REPOSITORY') private readonly alunoRepository: Repository<Aluno> ) {}

  async insertEndereco(rua: string, numero: string, complemento: string, bairro: string, cpf_aluno: string): Promise<Endereco> {
    const endereco = new Endereco()
    endereco.bairro = bairro
    endereco.complemento = complemento
    endereco.numero = numero
    endereco.rua = rua

    const aluno = await this.alunoRepository.findOne({cpf: cpf_aluno})
    endereco.aluno = aluno

    return await this.enderecoRepository.save(endereco);
  }

  async getAllEnderecos(): Promise<Endereco[]> {
    return await this.enderecoRepository.find();
  }
}