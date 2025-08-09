# API de Transferências e Usuários

Esta API permite o registro, login, consulta de usuários e transferências de valores entre usuários, com regras de negócio para aprendizado de testes e automação.

## Tecnologias
- Node.js
- Express
- Swagger (documentação)

## Instalação
1. Clone o repositório ou copie os arquivos para sua máquina.
2. Instale as dependências:
   ```
npm install express swagger-ui-express
   ```

## Como rodar
1. Inicie o servidor:
   ```
node server.js
   ```
2. Acesse a documentação Swagger em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints principais
- `POST /users/register` — Registro de usuário
- `POST /users/login` — Login de usuário
- `GET /users` — Listar usuários
- `POST /transfers` — Realizar transferência
- `GET /transfers` — Listar transferências

## Regras de negócio
- Login exige usuário e senha.
- Não é permitido registrar usuários duplicados.
- Transferências para destinatários não favorecidos só podem ser feitas se o valor for menor que R$ 5.000,00.
- O banco de dados é em memória (os dados são perdidos ao reiniciar o servidor).

## Testes
A API foi estruturada para facilitar testes automatizados, especialmente com Supertest, importando o `app.js` sem o método `listen()`.

---

Para dúvidas ou sugestões, utilize a documentação Swagger ou consulte os arquivos fonte.
