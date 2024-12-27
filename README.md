# Catálogo de Filmes

Este é um projeto de um catálogo de filmes desenvolvido com **Next.js**, que consome a [API TMDB (The Movie Database)](https://www.themoviedb.org/documentation/api). Este projeto permite explorar informações sobre filmes, incluindo descrição, avaliações e outros detalhes.

## Funcionalidades

- Listagem de filmes populares.
- Pesquisa de filmes pelo título.
- Visualização de detalhes de cada filme, como sinopse, gênero e avaliações.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e aplicações web modernas.
- **API TMDB**: Fonte de dados para o catálogo de filmes.
- **CSS/SCSS**: Estilização da interface.

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/grebechi/catalogo-filmes.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd catalogo-filmes
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:
   Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave da API TMDB:
   ```env
   TMDB_API_KEY=sua-chave-da-api
   ```

## Uso

Para rodar o projeto em ambiente de desenvolvimento, use:
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Estrutura Inicial do Projeto

```plaintext
/
├── pages/         # Páginas do Next.js
│   ├── index.js  # Página inicial
│   └── movie/   # Páginas dinâmicas de detalhes de filmes
├── styles/        # Arquivos de estilo
└── public/        # Arquivos estáticos
```

## Incrementos Futuros

- Filtro por gênero e ano de lançamento.
- Sistema de favoritar filmes.
- Paginação para navegação na lista de filmes populares.
- Melhorias no design responsivo.

## Contribuições

Contribuições são bem-vindas! Por favor, abra uma [issue](https://github.com/grebechi/catalogo-filmes/issues) para reportar problemas ou sugerir melhorias.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
