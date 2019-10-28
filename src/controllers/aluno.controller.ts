import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { AlunoService } from '../services/aluno.service';
import { EnderecoService } from '../services/endereco.service';
import { tsBooleanKeyword, numberLiteralTypeAnnotation } from '@babel/types';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService, private readonly enderecoService: EnderecoService) {}

  //retornar dados de todos os alunos
  @Get()
  async getAlunos(): Promise<{}> {
    return await this.alunoService.getAllAlunos();
  }

   //retornar os dados de todos os alunos que possuem nota maior que a média de todos os alunos;
   @Get("media")
   async getAlunosBetterThanAvarage(): Promise<{}> {
     return await this.alunoService.getAllAlunosBetterThanAverage();
   }

  //retornar dados de um único aluno
  @Get(":id")
  async getOneAluno(@Param('id') id): Promise<{}> {
    console.log(id)
    return await this.alunoService.getAlunoById(id)
  }

  //retornar todos os endereços de um aluno e sua quantidade;
  @Get(":id/endereco")
  async getAlunoAndEndereco(@Param('id') id): Promise<{}> {
    const enderecos = await this.alunoService.getEnderecosOfAluno(id)
    const formattedEnderecos = this.enderecoService.formatEnderecos(enderecos)
    const formattedJson = {total: enderecos.length, enderecos: formattedEnderecos}
    return formattedJson
  }

  //retornar os dados de todos os alunos que possuem nota maior que a nota dada como parâmetro se o
  //criterio for igual a “>” e os que possuem nota menor se o criterio for igual a “<”;
  @Get("/aluno/:nota/criterio/:criterio")
  getAlunoByCriterio(@Param() params):{} {
    const nota = params.nota
    const criterio = params.criterio
    //call service
    return {}
  }

  //cadastrar um aluno
  @Post()
  async addAluno( @Body("nome") nome: string, 
            @Body("data") data: string,
            @Body("cpf") cpf: string, 
            @Body("nota") nota: number, ): Promise<{}> {
    const data_nasc = new Date(data)
    return await this.alunoService.insertAluno(nome, data_nasc, cpf, nota)
  }

  //editar um aluno
  @Put(":id")
  editAluno(  @Param('id') id,
              @Body("nome") nome: string, 
              @Body("data_nascimento") data_nascimento: Date, 
              @Body("cpf") cpf: string, 
              @Body("nota") nota: number, ):{} {
    //call service
    return {}
  }


}
