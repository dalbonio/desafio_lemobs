import { Controller, Get, Post, Body, Put, Param, Query } from '@nestjs/common';
import { EnderecoService } from '../services/endereco.service';
import { ApiImplicitQuery } from '@nestjs/swagger';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  //retornar dados de todos os endereços;
  @Get()
  @ApiImplicitQuery({
    name: 'bairro',
    required: false,
    type: String
  })
  getEnderecos(@Query("bairro") bairro: string): Promise<{}> {
    return this.enderecoService.getAllEnderecos(bairro); 
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
