import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { EnderecoService } from '../services/endereco.service';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  //retornar dados de todos os endereços;
  @Get()
  getTickets(): {} {
    return this.enderecoService.insertEndereco();
  }

  //cadastrar um endereco
  @Post()
  addAluno( @Body("rua") rua: string, 
            @Body("numero") numero: string, 
            @Body("complemento") complemento: string, 
            @Body("bairro") bairro: string, ):{} {
    //call service
    return {}
  }
}
