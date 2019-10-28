import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Aluno } from '../entities/aluno.entity';
import { Endereco } from '../entities/endereco.entity';

@Injectable()
export class EnderecoService {
  constructor( @Inject('ENDERECO_REPOSITORY') private readonly enderecoRepository: Repository<Endereco>,
               @Inject('ALUNO_REPOSITORY') private readonly alunoRepository: Repository<Aluno> ) {}

  async insertEndereco(rua: string, numero: string, complemento: string, bairro: string, id_aluno: number): Promise<Endereco> {
    const endereco = new Endereco()
    endereco.bairro = bairro
    endereco.complemento = complemento
    endereco.numero = numero
    endereco.rua = rua
    console.log(id_aluno)

    const aluno = await this.alunoRepository.findOne(id_aluno)
    endereco.aluno = aluno

    return await this.enderecoRepository.save(endereco);
  }

  async getAllEnderecos(): Promise<Endereco[]> {
    return await this.enderecoRepository.find();
  }

  formatEnderecos(enderecos: Endereco[]){
    const formattedEnderecos = enderecos.map( (endereco) => ({endereco: endereco.rua + ", " 
                                                                + this.enderecoNumeroStr(endereco.numero) 
                                                                + this.enderecoComplementoStr(endereco.complemento),
                                                              bairro: endereco.bairro}) )

    return formattedEnderecos;
  }

  private enderecoNumeroStr?(numero: string){
    if(numero) 
      return numero
    else 
      return "s/n"
  }

  private enderecoComplementoStr?(complemento: string){
    if(complemento) 
      return " - " + complemento
    else 
      return ""
  }
}