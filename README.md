# Next.js Project

Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Bibliotecas Usadas

- **Next.js**: Framework React para produção.
- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Material-UI**: Biblioteca de componentes React para um design consistente e responsivo.
- **Axios**: Cliente HTTP baseado em Promises para fazer requisições.

## Arquitetura do Projeto

A arquitetura deste projeto está organizada de forma modular, separando responsabilidades por funcionalidades, o que facilita a manutenção e a escalabilidade do código. Abaixo, uma descrição detalhada de cada diretório:

- **`api/`**: Contém a configuração do cliente Axios e os endpoints para chamadas de API.
  - `index.ts`: Centraliza a configuração do Axios, padronizando as requisições HTTP.

- **`components/`**: Armazena os componentes React que formam a interface do usuário. Cada tipo de componente possui sua própria subpasta:
  - `comments/`: Inclui o componente `comments-card.tsx`, responsável por exibir comentários.
  - `credits/`: Contém o `credits-section.tsx`, onde são gerenciadas as informações sobre créditos.
  - `researches/`: Inclui o componente `my-researches.tsx`, relacionado à exibição de pesquisas do usuário.
  - `resume/`: Guarda o `resume-section.tsx`, utilizado para exibir resumos.
  - `shots/`: Contém o `shots-section.tsx`, que exibe um conteúdo específico de “shots”.
  - `audience/`: Inclui o `audience-section.tsx`, para exibir informações relacionadas à audiência.

- **`services/`**: Inclui serviços para realizar chamadas de API de forma isolada e modular.
  - `homeService.ts`: Lida com requisições específicas da página inicial.
  - `notificationsService.ts`: Centraliza as chamadas relacionadas às notificações.


## Como Rodar o Projeto

Primeiro, instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

Depois, rode o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev

```

Abra http://localhost:3000 no seu navegador para ver o resultado.

## Configuração do Ambiente
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

`NEXT_PUBLIC_API_URL=https://api.basestudio.app/v1/c6b1a48fbc86a778b977b0/`

## (Melhoria) Implementar um Gerenciamento de Estado para as Notificações

Uma melhoria significativa seria implementar um gerenciamento de estado para as notificações. Isso pode ser feito usando bibliotecas como:

- **Redux**: Biblioteca para gerenciamento de estado previsível.
- **React Query**: Biblioteca para gerenciamento de estado assíncrono.
- **Context API**: API nativa do React para gerenciamento de estado.


