import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlunoService } from '../services/aluno.service';

@Controller('alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Get()
  getAlunos(): {} {
    return this.alunoService.insertAluno();
  }
}
