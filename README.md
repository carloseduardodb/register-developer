<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="./project-image/logo.png" width="320" alt="Crud Dev" /></a>
</p>

<p align="center">Cadastro de desenvolvedores e seus níveis</p>

## Tecnologias utilizadas

### Frontend

- TypeScript
- React
- React Hook Form
- Toastify
- React Table (Paginação do lado servidor)
- React Router Dom
- React Icons
- Axios
- Context API, useMemo, useCallBack

### Backend

- TypeScript
- Nestjs
- PostgreSQL
- TypeORM
- Swagger (Documentação da API)
- Jest - Testes Unitários (Apenas casos de sucesso ( por enquanto 😋 ))
- Alguns princípios de DDD/TDD

<br />

## Ações criadas

### Nível

- Adicionar
- Remover
- Atualizar
- Listar um
- Listar todos (Paginado)
- Listar todos (Sem paginação / Para exibição no cadastro de desenvolvedor)
- Exclusão em Massa

### Desenvolvedor

- Adicionar
- Remover
- Atualizar
- Listar um
- Listar todos (Paginado)
- Exclusão em massa

## Telas do projeto

- Inicio
  <br />
  <img src="./project-image/home.png" width="520" alt="inicio" />

- Gerenciar desenvolvedores
  <br />
  <img src="./project-image/management-developer.png" width="520" alt="Gerenciar desenvolvedores" />

- Gerenciar níveis
  <br />
  <img src="./project-image/management-level.png" width="520" alt="Gerenciar niveis" />

- Listagem dos endpoints do Swagger
  <br />
  <img src="./project-image/endpoints-swagger.png" width="520" alt="Endpoints swagger" />

## Instalação (Comandos testados apenas no linux)

<p>
    Clone o repositório em sua maquina
</p>

```bash
$ git clone https://github.com/carloseduardodb/register-developer.git
```

<p>
    Acesse a pagina do projeto
</p>

```bash
$ cd register-developer
```

### Backend

<p> É necessário a instalação global do <a href="https://www.npmjs.com/package/ts-node">ts-node</a></p>
<p>
    Entre na pasta do projeto
</p>

```bash
$ cd register-developer-backend
```

> Configure o banco de dados no arquivo register-developer-backend/src/ormconfig.ts por padrão estou utilizando o Postgresql

> Crie um banco de dados com o nome pg_data

<p>
    Rode o comando abaixo
</p>

```bash
$ yarn install && yarn start:dev && yarn test:watch
```

> O projeto estará disponível em localhost:3000

> A documentação da api estará disponível em localhost:3000/api

### Frontend

<p>
    Entre na pasta do projeto
</p>

```bash
$ cd register-developer-frontend
```

<p>
    Rode o comando abaixo
</p>

```bash
$ yarn install && yarn start
```

> O projeto estará disponível em localhost:3001

## Entre em contato

- Autor - [Carlos Eduardo Dias Batista](https://portfolio-carlos-eduardo-dias-batista.vercel.app/)
- Website do Framework - [https://nestjs.com](https://nestjs.com/)
- Linkedin - [@carlos-eduardo-batista-26a574120](https://www.linkedin.com/in/carlos-eduardo-batista-26a574120/)

## License

Register Developer is [MIT licensed](LICENSE).
