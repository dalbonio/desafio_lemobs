import { Module } from '@nestjs/common';
import { EnderecoController } from '../controllers/endereco.controller';
import { EnderecoService } from '../services/endereco.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { enderecoProviders } from '../providers/endereco.provider';
import { DatabaseModule } from './database.module'
import { AlunoModule } from './aluno.module';
import { Endereco } from '../entities/endereco.entity';

@Module({
  imports: [DatabaseModule, AlunoModule, Endereco],
  controllers: [EnderecoController],
  providers: [...enderecoProviders, EnderecoService],
})
export class EnderecoModule {}
