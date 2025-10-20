# AgroRegistro API

API RESTful para o gerenciamento de agricultores, desenvolvida como parte do teste prático.

## Tecnologias Utilizadas

- **Backend:** Node.js, TypeScript, Express.js
- **Banco de Dados:** MySQL com TypeORM

## Arquitetura e Padrões

O projeto foi desenvolvido seguindo boas práticas de código limpo e arquitetura em camadas:

- **Arquitetura MVC (adaptada para APIs)**
- **Repository Pattern:** isola a lógica de acesso a dados
- **Service Layer:** centraliza regras de negócio
- **Injeção de Dependência:** promove baixo acoplamento e alta manutenibilidade
- **Soft Delete:** garante exclusão segura preservando histórico
- **Documentação:** Doc Swagger para legibilidade e interatividade.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js (v18 ou superior)
- NPM
- MySQL (v8 ou superior)
- Git

### Instalação

```bash
# 1. Clone o repositório completo
git clone https://github.com/DEV-ALC/AgroRegisto.git

# 2. Navegue para a pasta do backend
cd AgroRegisto/backend

# 3. Instale todas as dependências
npm install
```

### Configuração

Crie um arquivo `.env` na raiz da pasta `backend` e adicione suas credenciais:

```env
# Servidor
PORT=3000

# Banco de Dados
DB_HOST=localhost (ATENÇÃO: SUBSTITUA os valores com as credenciais reais)
DB_PORT=3306
DB_USER=root
DB_PASSWORD=senha
DB_NAME=agricultores_db
```

> IMPORTANTE: Antes de iniciar o servidor, se o banco de dados chamado agricultores_db não existir, você deve criá-lo manualmente no seu sistema de gestão de banco de dados (MySQL, por exemplo).

### Banco e Migrations

Certifique-se de que o MySQL está rodando e execute:

```bash
npm run migration:run
```

### Rodar o servidor

```bash
npm run dev
```

A API estará disponível em:
👉 [http://localhost:3000](http://localhost:3000)

## Documentação da API

A documentação completa e interativa está disponível via Swagger:

👉 [http://localhost:3000/docs](http://localhost:3000/docs)

Lá você encontrará todos os endpoints, exemplos de requisição e resposta, status codes e descrições detalhadas.

---
