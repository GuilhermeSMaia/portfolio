# Portfólio — Guilherme S Maia

Portfólio pessoal construído em React + Vite, organizado em componentes,
inspirado no formato de currículo do nuxman.com.br (cartão de perfil,
estatísticas em destaque, experiência com bullets de conquistas e tags de
tecnologia).

## Estrutura

```
src/
  data/
    content.js       ← todo o conteúdo do site (textos, skills, experiências, projetos)
  components/
    Nav.jsx
    Hero.jsx          ← cabeçalho com cartão de perfil e estatísticas
    About.jsx         ← resumo profissional
    Stack.jsx         ← skills agrupadas por categoria
    Experience.jsx    ← experiência em timeline, com bullets de conquistas
    Projects.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
  App.jsx             ← monta os componentes na ordem da página
  main.jsx            ← ponto de entrada
  index.css           ← estilos globais (paleta, tipografia, layout)
```

Para editar o conteúdo (textos, experiências, skills, contato), mexa apenas em
`src/data/content.js` — não é necessário tocar nos componentes.

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) instalado (versão 18 ou superior).

```bash
npm install
npm run dev
```

Isso abre o site em `http://localhost:5173`.

## Como gerar a versão de produção

```bash
npm run build
```

Isso cria a pasta `dist/` com os arquivos otimizados, prontos para publicar.

## Como publicar (deploy)

- **Vercel**: importe o repositório do GitHub em vercel.com, ele detecta o Vite
  automaticamente.
- **Netlify**: conecte o repositório, comando de build `npm run build`, pasta
  de publicação `dist`.
- **GitHub Pages**: rode `npm run build` e publique o conteúdo da pasta `dist`
  na branch `gh-pages`.

## Como adicionar sua foto

Coloque um arquivo de imagem em `public/avatar.jpg` (quadrado, ex: 400x400px).
O site já está configurado para usá-lo automaticamente (`profile.photo` em
`src/data/content.js`). Se o arquivo não existir, o site mostra suas iniciais
no lugar — nada quebra.

Se preferir outro nome ou formato (ex: `.png`), ajuste o valor de
`profile.photo` em `src/data/content.js` de acordo.

## Antes de publicar

Atualize em `src/data/content.js`:
- `profile.email` com seu e-mail real de contato.
- A seção `projects` caso queira adicionar mais projetos, seguindo o mesmo
  formato dos exemplos (PreçoChef, E-Campet).
