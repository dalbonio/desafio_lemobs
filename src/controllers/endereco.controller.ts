import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { EnderecoService } from '../services/endereco.service';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  //retornar dados de todos os endereços;
  @Get()
  getEnderecos(): Promise<{}> {
    return this.enderecoService.getAllEnderecos();
  }

  //cadastrar um endereco
  @Post()
  addEndereco( @Body("rua") rua: string, 
            @Body("numero") numero: string, 
            @Body("complemento") complemento: string, 
            @Body("bairro") bairro: string, 
            @Body("id_aluno") id_aluno: number): Promise<{}> {
    return Promise.resolve(this.enderecoService.insertEndereco(rua, numero, complemento, bairro, id_aluno));
  }
}
