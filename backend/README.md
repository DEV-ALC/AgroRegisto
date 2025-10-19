# AgroRegistro API

API RESTful para o gerenciamento de agricultores, desenvolvida como parte do teste prático para a vaga de Desenvolvedor.

## Tecnologias Utilizadas

* **Backend:** Node.js, TypeScript, Express.js
* **Banco de Dados:** MySQL com TypeORM

## Arquitetura e Padrões

O projeto foi desenvolvido seguindo os princípios de código limpo e arquitetura em camadas:

* **Arquitetura MVC** (adaptada para APIs)
* **Padrão Repositório (Repository Pattern):** Isola a lógica de acesso aos dados.
* **Camada de Serviço (Service Layer):** Centraliza as regras de negócio.
* **Injeção de Dependência:** Para um código desacoplado e manutenível.
* **Soft Delete:** Para a exclusão segura de registros, preservando o histórico.

## Como Rodar o Projeto

### Pré-requisitos

* Node.js (v20 ou superior)
* NPM ou Yarn
* MySQL (v8 ou superior)
* Git

### Passos para Instalação

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/DEV-ALC/AgroRegisto.git
    cd AgroRegisto/backend
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Configure as variáveis de ambiente:**
    * Crie um arquivo `.env` na raiz da pasta `backend`.
    * Use o modelo abaixo para preencher com suas credenciais:
    ```env
    # Servidor
    PORT=3000

    # Banco de Dados
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=root
    DB_PASSWORD=senha
    DB_NAME=agricultores_db
    ```

4.  **Crie o banco de dados:**
    * Certifique-se de que seu servidor MySQL está rodando.
    * Crie um banco de dados com o nome que você definiu em `DB_NAME` (ex: `agricultores_db`).

5.  **Rode as migrations:**
    * Este comando criará as tabelas necessárias no banco de dados.
    ```bash
    npm run migration:run
    ```

6.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    * A API estará disponível em `http://localhost:3000`.

## Documentação da API

### 1. Criar Agricultor
Cria um novo registro de agricultor ou reativa um existente (soft deleted).

* **Método:** `POST`
* **URL:** `/agricultores`
* **Corpo da Requisição (Body):**
    ```json
    {
        "razao_social": "Nome da Empresa LTDA",
        "nome_fantasia": "Fazenda Exemplo",
        "documento": "59.407.062/0001-65",
        "celular": "11912345678",
        "cidade": "Campinas",
        "estado": "SP"
    }
    ```
* **Resposta de Sucesso:** Status `201 Created` e o objeto JSON do agricultor.

### 2. Listar Todos os Agricultores
Retorna uma lista com todos os agricultores ativos.

* **Método:** `GET`
* **URL:** `/agricultores`
* **Resposta de Sucesso:** Status `200 OK` e um array `[]` contendo os agricultores.

### 3. Buscar Agricultor por ID
Retorna os dados de um agricultor específico.

* **Método:** `GET`
* **URL:** `/agricultores/:id`
* **Resposta de Sucesso:** Status `200 OK` e o objeto JSON do agricultor.

### 4. Atualizar Agricultor
Atualiza os dados de um agricultor existente.

* **Método:** `PUT`
* **URL:** `/agricultores/:id`
* **Corpo da Requisição (Body):**
    ```json
    {
        "cidade": "Ribeirão Preto"
    }
    ```
* **Resposta de Sucesso:** Status `200 OK` e o objeto JSON do agricultor atualizado.

### 5. Deletar Agricultor
Realiza a exclusão lógica (soft delete) de um agricultor.

* **Método:** `DELETE`
* **URL:** `/agricultores/:id`
* **Resposta de Sucesso:** Status `204 No Content` e corpo da resposta vazio.