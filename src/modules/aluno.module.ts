import { Module, forwardRef } from '@nestjs/common';
import { AlunoController } from '../controllers/aluno.controller';
import { AlunoService } from '../services/aluno.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { alunoProviders } from '../providers/aluno.provider';
import { DatabaseModule } from './database.module'
import { EnderecoModule } from './endereco.module'
import { Aluno } from '../entities/aluno.entity';

@Module({
  imports: [DatabaseModule, forwardRef( () => EnderecoModule), Aluno],
  controllers: [AlunoController],
  providers: [...alunoProviders, AlunoService],
  exports: [...alunoProviders, AlunoService]
})
export class AlunoModule {}
