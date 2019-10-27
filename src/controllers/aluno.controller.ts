import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { AlunoService } from '../services/aluno.service';
import { tsBooleanKeyword } from '@babel/types';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  //retornar dados de todos os alunos
  @Get()
  getAlunos(): {} {
    return this.alunoService.insertAluno();
  }

  //retornar dados de um único aluno
  @Get(":id")
  getOneAluno(@Param('id') id):{} {
    //call service
    return {}
  }

  //retornar todos os endereços de um aluno e sua quantidade;
  @Get(":id/endereco")
  getAlunoAndEndereco(@Param('id') id):{} {
    //call service
    return {}
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
  getAlunosBetterThanAvarage(): {} {
    return this.alunoService.insertAluno();
  }

  //cadastrar um aluno
  @Post()
  addAluno( @Body("nome") nome: string, 
            @Body("data_nascimento") data_nascimento: Date, 
            @Body("cpf") cpf: string, 
            @Body("nota") nota: number, ):{} {
    //call service
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
