# AgroRegistro - Sistema de Gerenciamento de Agricultores

Este é um sistema completo de CRUD (Criar, Ler, Atualizar, Deletar) para o gerenciamento de agricultores, desenvolvido como um teste prático.

O projeto é dividido em duas partes principais:

* **`backend`**: Uma API RESTful desenvolvida em Node.js com TypeScript, Express e TypeORM.
* **`frontend`**: Uma interface de usuário reativa desenvolvida em React.

## Estrutura de Pastas

```bash

AgroRegistro/
├── backend/       # Código-fonte da API
└── frontend/      # Código-fonte da Interface do Usuário

```

## Tecnologias

| Área      | Tecnologias Utilizadas                                |
| :-------- | :---------------------------------------------------- |
| **Backend** | Node.js, TypeScript, Express.js, MySQL, TypeORM       |
| **Frontend**| React, Vite, Axios (para chamadas de API), CSS Modules|

## Como Rodar o Projeto Completo

Para executar a aplicação, você precisará iniciar o backend e o frontend em terminais separados.

### Pré-requisitos
* Node.js (v18 ou superior)
* NPM
* MySQL (v8 ou superior)
* Git

### 1. Iniciar o Backend (API)

Primeiro, vamos configurar e iniciar o servidor da API.

```bash
# 1. Navegue para a pasta do backend
cd backend

# 2. Instale as dependências
npm install

# 3. Configure o arquivo .env (veja o README.md do backend para detalhes)
#    - Crie o arquivo .env e adicione as credenciais do seu banco de dados.

# 4. Rode as migrations para criar as tabelas no banco
npm run migration:run

# 5. Inicie o servidor em modo de desenvolvimento
npm run dev
```

> O servidor da API estará rodando em `http://localhost:3000`.

### 2. Iniciar o Frontend (Interface)

Agora, em um **novo terminal**, vamos iniciar a interface React.

```bash
# 1. Navegue para a pasta do frontend (a partir da raiz do projeto)
cd frontend

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento do React
npm run dev

```

> A aplicação estará acessível no seu navegador, geralmente em `http://localhost:5173`. A interface fará as chamadas para a API que está rodando na porta 3000.
