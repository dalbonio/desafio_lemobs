import { Controller, Get } from '@nestjs/common';
import { EnderecoService } from '../services/endereco.service';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Get()
  getTickets(): {} {
    return this.enderecoService.insertEndereco();
  }
}
