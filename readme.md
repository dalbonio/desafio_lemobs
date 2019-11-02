
A avaliação consiste no desenvolvimento de uma API Restful utilizando Node.js. A
API deverá ser implementada utilizando o framework Nest (https://docs.nestjs.com) para
ofertar as funcionalidades. Para manter os dados, é utilizado um banco de dados
PostgreSQL.
Não é necessária a criação de uma interface web para apresentação dos dados.
Para esta avaliação, a documentação do Swagger gerada pelo Nest será considerada a
interface necessária. (https://docs.nestjs.com/recipes/swagger).

### Desafio
![](/modelo.png)
- Crie um banco de dados em PostgreSQL baseado no modelo de dados da Figura 1;
- Implemente as conexões da API ao seu banco de dados;
- Implemente o serviço /aluno (POST) para cadastrar um aluno;
- Implemente o serviço /aluno/{aluno_id} (PUT) para editar um aluno;
- Implemente o serviço /aluno/{aluno_id} (GET) para retornar dados de um único
aluno;
- Implemente o serviço /aluno (GET) para retornar dados de todos os alunos;
- Implemente o serviço /aluno/{aluno_id}/endereco (GET) para retornar todos os
endereços de um aluno e sua quantidade;
- Implemente o serviço /aluno/{nota}/criterio/{criterio} (GET) para retornar os dados de
todos os alunos que possuem nota maior que a nota dada como parâmetro se o
criterio for igual a “>” e os que possuem nota menor se o criterio for igual a “<”;
- Implemente o serviço /aluno/media (GET) para retornar os dados de todos os alunos
que possuem nota maior que a média de todos os alunos;
- Implemente o serviço /endereco (POST) para cadastrar um novo endereço;
- Implemente o serviço /endereco (GET) para retornar dados de todos os endereços;

### *informações importantes*
- Apenas número e complemento são dados não obrigatórios no banco de dados;
- O serviço /aluno/{aluno_id}/endereco (GET) de retornar todos os endereços de um
usuário deve seguir o seguinte JSON de saída de exemplo:
![](/exemplo_saida_json.png)

## Entrega
A entrega desta avaliação deverá ocorrer em até 1 semana após o envio da mesma, e devem ser entregues os seguintes artefatos:
1. scripts de criação do banco de dados SQL;
2. código fonte da API conforme o desafio;