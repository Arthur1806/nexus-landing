# NexusCX — Landing Page

<p align="center">
  <strong>Landing page de alta conversão para SaaS de atendimento via WhatsApp com IA</strong>
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black&style=flat-square" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square" />
  <img alt="License" src="https://img.shields.io/badge/license-Private-lightgrey?style=flat-square" />
</p>

---

## 📋 Sobre o projeto

O **NexusCX** é uma plataforma de atendimento inteligente para WhatsApp, que centraliza
múltiplos atendentes em um único número e usa IA para responder, qualificar e converter
leads 24 horas por dia. Este repositório contém a **landing page de captação de clientes**
do produto — construída com foco em conversão, performance e um visual dark/premium
inspirado em produtos como Vercel, Linear e Stripe.

## ✨ Seções da página

| Seção | Descrição |
|---|---|
| **Navbar** | Menu fixo com glassmorphism e navegação por âncoras |
| **Hero** | Headline de impacto + mockup interativo do painel do sistema |
| **Métricas** | Números de prova social (mensagens processadas, uptime, conversão) |
| **O problema** | Comparativo "antes x depois" do atendimento sem e com o NexusCX |
| **Recursos** | Bento grid com os principais diferenciais da plataforma |
| **Casos de uso** | Abas por segmento: clínicas, imobiliárias, e-commerce e agências |
| **Preços** | 3 planos com toggle mensal/anual |
| **FAQ** | Accordion com as principais objeções respondidas |
| **CTA final** | Chamada de conversão antes do rodapé |
| **Footer** | Links institucionais e status do sistema |

## 🛠️ Tecnologias

- **[React 18](https://react.dev/)** — biblioteca de interface
- **[Vite](https://vitejs.dev/)** — build tool e servidor de desenvolvimento
- **[Tailwind CSS](https://tailwindcss.com/)** — estilização utilitária
- **[Lucide React](https://lucide.dev/)** — ícones

## 🚀 Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior instalado.

```bash
# Clone o repositório
git clone https://github.com/Arthur1806/nexuscx-landing.git

# Acesse a pasta do projeto
cd nexuscx-landing

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Depois é só abrir **http://localhost:5173** no navegador. 🎉

## 📦 Build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`, prontos para deploy em qualquer
serviço de hospedagem estática, como [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/)
ou [Cloudflare Pages](https://pages.cloudflare.com/).

Para pré-visualizar o build localmente:

```bash
npm run preview
```

## 📁 Estrutura do projeto

```
nexuscx-landing/
├── src/
│   ├── NexusCXLanding.jsx   # Componente principal com todas as seções
│   ├── App.jsx              # Ponto de entrada que renderiza a landing page
│   ├── main.jsx             # Bootstrap do React
│   └── index.css            # Diretivas do Tailwind CSS
├── index.html                # HTML raiz
├── tailwind.config.js        # Configuração do Tailwind
├── postcss.config.js         # Configuração do PostCSS
├── vite.config.js            # Configuração do Vite
└── package.json
```

## 🎨 Identidade visual

| Token | Valor |
|---|---|
| Background principal | `#050505` |
| Background de superfícies | `#0D0D0E` |
| Cor de destaque (Indigo) | `#6366F1` / `#4F46E5` |
| Cor de ação / sucesso (Esmeralda) | `#10B981` |
| Tipografia de títulos | Plus Jakarta Sans |
| Tipografia de corpo | Inter |

## 📄 Licença

Projeto privado — todos os direitos reservados © NexusCX.
