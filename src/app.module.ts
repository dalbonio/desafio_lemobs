import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './modules/aluno.module';
import { EnderecoModule } from './modules/endereco.module';
import { Utils } from './utils/utils';

@Module({
  imports: [AlunoModule, EnderecoModule, Utils],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
