import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { AlunoService } from '../services/aluno.service';
import { tsBooleanKeyword } from '@babel/types';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  //retornar dados de todos os alunos
  @Get()
  async getAlunos(): Promise<{}> {
    return await this.alunoService.getAllAlunos();
  }

  //retornar dados de um único aluno
  @Get(":id")
  async getOneAluno(@Param('id') id): Promise<{}> {
    return await this.alunoService.getAlunoById(id)
  }

  //retornar todos os endereços de um aluno e sua quantidade;
  @Get(":id/endereco")
  async getAlunoAndEndereco(@Param('id') id): Promise<{}> {
    return this.alunoService.getAlunoById(id)
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

  //retornar os dados de todos os alunos que possuem nota maior que a média de todos os alunos;
  @Get("media")
  async getAlunosBetterThanAvarage(): Promise<{}> {
    return await this.alunoService.getAllAlunosBetterThanAverage();
  }

  //cadastrar um aluno
  @Post()
  addAluno( @Body("nome") nome: string, 
            @Body("ano") ano_nasc: number, 
            @Body("mes") mes_nasc: number, 
            @Body("dia") dia_nasc: number, 
            @Body("cpf") cpf: string, 
            @Body("nota") nota: number,
            @Body("aluno_enderecos") endereco: {total: number, enderecos: {nome: string, numero: string, complemento: string, bairro: string} }  ):{} {
    const date = new Date(ano_nasc, mes_nasc, dia_nasc)
    
    //this.alunoService.updateAluno(nome, date, cpf, nota)
    return {}
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
