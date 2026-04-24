API de Usuários (Simulação de Banco de Dados)

Esta API Node.js, construída com Express, simula um banco de dados de usuários utilizando um array de objetos em memória. É ideal para testes locais e desenvolvimento sem a necessidade de uma conexão com um banco de dados externo.

Como Executar a API Localmente

Siga os passos abaixo para colocar a API em funcionamento em sua máquina local:

1.
Clone o Repositório:

Bash


git clone https://github.com/merisi00/API.git
cd API





2.
Instale as Dependências:

Bash


npm install





3.
Inicie a API:

Bash


node index.js



A API será iniciada e estará disponível em http://localhost:3000.



Rotas Disponíveis

Aqui estão as rotas que você pode utilizar para interagir com a API:

•
GET /

•
Retorna uma mensagem de boas-vindas com a contagem de usuários cadastrados.

•
Exemplo: http://localhost:3000/



•
GET /usuarios

•
Retorna todos os usuários cadastrados no array simulado.

•
Exemplo: http://localhost:3000/usuarios



•
GET /usuarios/busca?nome={nome}

•
Busca usuários pelo nome (case-insensitive ).

•
Exemplo: http://localhost:3000/usuarios/busca?nome=alice



•
POST /usuarios

•
Cria um novo usuário.

•
Corpo da Requisição (JSON ):

JSON


{
    "id": 3,
    "nome": "Carlos"
}





•
Retorna o usuário recém-criado com status 201 Created.



•
PUT /usuarios/:id

•
Atualiza um usuário existente pelo ID.

•
Corpo da Requisição (JSON):

JSON


{
    "nome": "Alicia"
}





•
Exemplo: http://localhost:3000/usuarios/1

•
Retorna o usuário atualizado.



•
DELETE /usuarios/:id

•
Remove um usuário pelo ID.

•
Exemplo: http://localhost:3000/usuarios/1

•
Retorna status 204 No Content.



Estrutura do Projeto

•
index.js: Contém a lógica principal da API, incluindo a simulação do banco de dados e as definições de rota.

•
package.json: Define as dependências do projeto e scripts de inicialização.




Observação: Esta simulação é volátil, o que significa que os dados são perdidos sempre que a API é reiniciada. Para persistência de dados, seria necessário integrar um banco de dados real (como o Supabase ).

