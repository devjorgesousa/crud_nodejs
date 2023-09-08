# CRUD de produtos com login e cadastro de usuário

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

#### É um CRUD de produtos feito com Node.js que permite adicionar, visualizar, atualizar e excluir produtos. Para ter acesso ao CRUD primeiro terá que cadastrar um usuário e depois fazer login com usuário cadastrado.

## Funcionalidades do projeto

## 🛠 Tecnologias e Ferramentas usadas na construção do projeto:

- [Visual Studio Code](https://code.visualstudio.com/)

- [Node.js](https://nodejs.org/en/)
- Dependências do Projeto em NodeJS(package.json)  
```
"dependencies": {
    "bcryptjs": "^2.4.3",
    "cookie-session": "^2.0.0",
    "express": "^4.18.2",
    "express-flash": "^0.0.2",
    "express-handlebars": "^6.0.7",
    "express-session": "^1.17.3",
    "multer": "^1.4.5-lts.1",
    "mysql2": "^3.6.0",
    "nodemon": "^3.0.1",
    "sequelize": "^6.32.1",
    "session-file-store": "^1.5.0"
  },
```

## 🎲 Rodando o Projeto 

###### 1ª Clone este repositório
* git clone https://github.com/devjorgesousa/crud_nodejs.git

###### 2ª Acesse a pasta do projeto no terminal/cmd ou Visual Studio Code, após descompactar o arquivo crud_nodejs.zip
* cd crud_nodejs

###### 3ª Instale as dependências.
* npm install

###### 4ª Vá para a pasta backend
* cd db

###### 5ª Altere a senha e o usuário do banco de dados do arquivo conn.js

###### 6ª Crie um banco de dados chamado: crud
* CREATE DATABASE crud;
![MariaDB](./Screenshots/)


###### 7ª Execute a aplicação 
* npm start

###### 8ª O projeto iniciará na porta: 5000 - Acesse: http://localhost:5000


