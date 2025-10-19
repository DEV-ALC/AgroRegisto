# Gestão de Agricultores (Front-end)

Este projeto é a interface de utilizador (UI) para Gestão de Agricultores, desenvolvido com foco na **experiência do utilizador (UX)**, **responsividade** e **integridade dos dados**.

## Funcionalidade e UX

- **Listagem Inteligente:** A lista adapta-se ao tamanho do ecrã, exibindo **Tabela** (Desktop) ou **Cartões** (Mobile), com uma lógica de _fetch_ robusta para recarregar dados.
- **Estrutura Modular:** Código limpo e de fácil manutenção, com separação clara entre _Containers_ (Lógica) e Componentes (UI).

---

## Tecnologias Usadas

| Tecnologia       | Versão | Descrição                                                            |
| :--------------- | :----- | :------------------------------------------------------------------- |
| **React**        | 19.1.1 | Biblioteca principal para a interface do utilizador.                 |
| **TypeScript**   | ~5.9.3 | Garante a segurança e a tipagem estática do código.                  |
| **Vite**         | 7.1.7  | Ferramenta de _build_ e servidor de desenvolvimento rápido.          |
| **Tailwind CSS** | 3.4.1  | Framework de CSS _utility-first_ para estilos rápidos e responsivos. |

---

## Estrutura

## Configuração Inicial

Crie um arquivo .env na raiz da pasta frontend e adicione o caminho da API.

```bash
#API
VITE_API_BASE_URL="http://localhost:3000"
```

### Pré-requisitos

Node.js (v18+).

### Clonar e Instalar

```bash
# Clone o repositório
git clone https://github.com/DEV-ALC/AgroRegisto.git
cd AgroRegisto/frontend
npm install

```

### Rodar o Projeto

```bash
npm run dev
```

O Projeto estará disponível em:
👉 [http://localhost:5173/](http://localhost:5173/)
