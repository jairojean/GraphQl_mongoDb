# GraphQL com JavaScript: Usuários e Postagens

Este é um pequeno projeto desenvolvido utilizando **GraphQL**, **Apollo Server**, **MongoDB** e **Mongoose** para demonstrar como criar uma API GraphQL com funcionalidades de CRUD para usuários e postagens. Ele permite a criação, leitura, atualização e exclusão de usuários e postagens, com um relacionamento entre eles.

## Tecnologias Usadas

- **GraphQL**: Utilizado para criar a API. GraphQL é uma linguagem de consulta para APIs que permite aos clientes pedir exatamente os dados que precisam.
  
- **Apollo Server**: Framework utilizado para configurar o servidor GraphQL.

- **MongoDB**: Banco de dados NoSQL utilizado para armazenar dados sobre os usuários e postagens.

- **Mongoose**: ODM (Object Data Modeling) para MongoDB, usado para facilitar a interação com o banco de dados.

- **Babel**: Utilizado para transcompilar o código moderno de JavaScript (ES6+) para versões mais antigas que são compatíveis com o Node.js.

## Funcionalidades

### Usuários
- **Criação de usuários**: Permite adicionar novos usuários à base de dados.
- **Leitura de usuários**: Permite consultar todos os usuários ou um usuário específico.
- **Atualização de usuários**: Permite atualizar as informações de um usuário.
- **Deleção de usuários**: Permite excluir um usuário.

### Postagens
- **Criação de postagens**: Permite adicionar novas postagens associadas a um usuário.
- **Leitura de postagens**: Permite consultar todas as postagens ou postagens específicas de um usuário.
- **Atualização de postagens**: Permite atualizar o conteúdo ou título de uma postagem.
- **Deleção de postagens**: Permite excluir uma postagem.

