# NexusCX — Landing Page

Landing page de alta conversão para o NexusCX (SaaS de atendimento via WhatsApp com IA),
construída com React, Vite, Tailwind CSS e Lucide Icons.

## Como rodar localmente

1. Instale as dependências:
   ```
   npm install
   ```

2. Rode o servidor de desenvolvimento:
   ```
   npm run dev
   ```

3. Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Build para produção

```
npm run build
```

Os arquivos finais serão gerados na pasta `dist/`, prontos para deploy em qualquer
serviço de hospedagem estática (Vercel, Netlify, Cloudflare Pages, etc.).

## Estrutura

- `src/NexusCXLanding.jsx` — componente principal com todas as seções da landing page.
- `src/App.jsx` — ponto de entrada que renderiza o componente.
- `src/index.css` — diretivas do Tailwind CSS.
- `tailwind.config.js` / `postcss.config.js` — configuração do Tailwind.
