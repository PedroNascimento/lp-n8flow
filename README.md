# 🚀 Agência n8flow - Landing Page & Webhook Automation

<div align="center">
  <h3>Transformando processos manuais em sistemas inteligentes de atração.</h3>
</div>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js%2015-black?style=for-the-badge&logo=next.js&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue">
</p>

## 📌 Sobre o Projeto

Este projeto é a Landing Page oficial da **Agência n8flow**, especializada em crescimento digital para negócios locais e clínicas. A página foi meticulosamente desenhada para atuar como uma máquina de conversão (SDR inteligente), guiando o visitante através de gatilhos psicológicos até a conversão num formulário multi-step interativo.

O grande diferencial deste projeto não é apenas o seu front-end robusto e animado, mas a **sua integração back-end com N8N**. Cada lead capturado é processado via _Server Actions_ do Next.js e enviado para um webhook seguro no n8n. Lá, um Agente de Inteligência Artificial (Gemini) analisa os dados do contato, o seu nicho e a sua dor específica, e **inicia ativamente o atendimento consultivo via WhatsApp** poucos segundos depois.

---

## 🎯 Principais Funcionalidades (Features)

- **UI/UX Premium e Dark Mode First:** Design elegante focado na identidade visual _n8flow_ (roleta e roxo neón), com tipografias modernas (`Inter`, `Outfit`, `Poppins`) e legibilidade extrema.
- **Formulário Multi-Step Animado:** Processo de qualificação de leads dividido em três etapas com transições suaves (Framer Motion) e validação em tempo real de cada passo, finalizando com uma tela in-page de confirmação de envio para o painel de atendimento.
- **Micro-Interações e Scroll Reveals:** O site não é estático; os elementos surgem com animações de _fade-in-up_ atreladas ao scroll da página, prendendo a atenção na leitura do copywriting.
- **Next.js Server Actions Backend:** Chamadas de webhook feitas do lado do servidor via `actions.ts`. Isso previne bloqueios de CORS por firewalls locais, oculta a URL final do N8N e garante entrega segura de dados corporativos (Lead, Empresa, Segmento, Desafio).
- **Floating CTA Inteligente:** Botão global de resposta direta de alta conversão. Detecta se o usuário já conheceu o produto (aparece apenas no scroll além do _Hero Section_) e redireciona a interface fluentemente ao formulário de captura ou age nativamente nas telas menores (Mobile).
- **SEO Ready e Boas Práticas (A11y):** Tags semânticas do HTML5 (`<article>`, `<header>`, `<main>`, `<section>`), links rotativos (Terms of Service, Privacy Policy) e supressão de injeções de terceiros via `suppressHydrationWarning`.

---

## 💻 Tecnologias Utilizadas

**Front-End Engine:**

- **`Framework`**: [Next.js 15](https://nextjs.org/) (App Router, Server Components).
- **`Language`**: [TypeScript](https://www.typescriptlang.org/) para segurança na tipagem de objetos, propriedades e eventos da UI.
- **`Styling`**: [Tailwind CSS v4](https://tailwindcss.com/) com paleta nativa `primary` (roxo #6e44ff), `secondary` (ciano #00f0ff) estendidos localmente.
- **`Components/Icons`**: [Shadcn UI](https://ui.shadcn.com/) para montagem rápida de UI e [Lucide React](https://lucide.dev/) (iconografia leve em formato vetorial SVG).
- **`Animations`**: [Framer Motion](https://www.framer.com/motion/) para estados de hover elaborados, layouts condicionalmente montados (`AnimatePresence`) e progressão do formulário.

**Back-End Architecture (Integration):**

- **`Webhook`**: Endpoint processado remotamente usando o painel workflow da plataforma de orquestração **n8n**.
- **`Inteligência Artificial`**: Integração _Google Gemini Flash/Pro_ estruturado com _System Prompt Engineering_ para atuar como SDR e simular diálogos iniciais humanizados via Evolution API.

---

## 🏗️ Estrutura e Práticas de Código

A arquitetura do projeto segue a especificação modular do App Router do Next.js. O código foi desenhado para escalabilidade horizontal de novas componentes UI e Landing Pages secundárias:

```bash
📦 src
 ┣ 📂 app
 ┃ ┣ 📜 actions.ts                   # 🔥 Server actions (Webhook POST/Fetch)
 ┃ ┣ 📜 globals.css                  # Definições base de cores/Tailwind config
 ┃ ┣ 📜 layout.tsx                   # Fontes G-Fonts, Configurações de SEO (Meta)
 ┃ ┗ 📜 page.tsx                     # Entrypoint aglomerando Sectors do Viewport
 ┣ 📂 components
 ┃ ┣ 📂 layout
 ┃ ┃ ┣ 📜 Footer.tsx
 ┃ ┃ ┗ 📜 Navbar.tsx
 ┃ ┣ 📂 sections                     # 🧩 Agrupamento lógico das dobras do site
 ┃ ┃ ┣ 📜 AboutSection.tsx           # Copys e Pilares
 ┃ ┃ ┣ 📜 AuthoritySection.tsx       # Prova social, resultados e números tangíveis
 ┃ ┃ ┣ 📜 ContactSection.tsx         # Lógica pesada: State Multi-Step, Zod/Validações e Submit Webhook
 ┃ ┃ ┣ 📜 HeroSection.tsx            # Primeira visualização do tráfego orgânico/pago
 ┃ ┃ ┣ 📜 HowItWorksSection.tsx      # Explicação linear via Roadmap CSS
 ┃ ┃ ┣ 📜 PainPointsSection.tsx      # Grid com cartões de dores B2B
 ┃ ┃ ┣ 📜 ServicesSection.tsx        # Grid com Soluções de impacto direto comercial
 ┃ ┃ ┣ 📜 TestimonialsSection.tsx    # Cards deslizáveis via Carousel ou Flex
 ┃ ┃ ┗ 📜 WhyN8flowSection.tsx       # Tabela de comparação entre "Média Geral" vs "n8flow"
 ┃ ┗ 📂 ui
 ┃   ┣ 📜 BrandLogo.tsx              # Componente atômico para manter consistência das marcas
 ┃   ┣ 📜 FloatingCTA.tsx            # Hook de Viewport e Scroll global
 ┃   ┣ 📜 button.tsx                 # Shadcn/ui baseline buttons
 ┃   ┣ 📜 card.tsx                   # Shadcn/ui content borders
 ┃   ┣ 📜 input.tsx                  # Shadcn form entrypoints
 ┃   ┗ 📜 textarea.tsx
```

---

## 🚀 Como Executar o Projeto Localmente

**1. Clone o repositório:**

```sh
git clone https://github.com/SeuUsuario/lp-n8flow.git
```

**2. Acesse a pasta do projeto:**

```sh
cd lp-n8flow
```

**3. Instale as dependências:**
Certifique-se de usar a `npm` ou o gerenciador da sua preferência em plataformas Node 18+:

```sh
npm install
# ou
yarn install
# ou
pnpm i
```

**4. Variáveis de Ambiente:**
Como as _Server Actions_ escondem os dados no ambiente de execução Node da Vercel/Next, caso venha a escalar, basta colocar o hook url como ENV. Ex:
Crie um arquivo `.env` ou `.env.local` e defina (caso decida mover o webhook da `actions.ts` pra var):

```env
N8N_WEBHOOK_URL="https://sua-url-do-n8n/webhook/"
```

**5. Inicie o servidor de desenvolvimento:**

```sh
npm run dev
```

**6. Build em Produção:**
Ideal para avaliar LCP (Largest Contentful Paint) no Lighthouse:

```sh
npm run build && npm run start
```

---

## 💡 Portfólio de Aprendizados (Dev Notes)

Para um portfólio este projeto destaca essencialmente habilidades técnicas chave:

1. **Entendimento Avançado de React:** Gerenciamento refinado de múltiplos estados (`useState`) controlando direção de scroll, renderização de passos variados de forms (`step` condition arrays), entre validação inline antes do evento `onClick` em botões do final da funil de conversão.
2. **Next.js Security:** Ao implementar Server Actions, foi exposto o domínio das métricas de Server-Side Rendering (SSR). Fazer requisições de formulários direto no Node ao invés de usar APIs do lado do navegador `fetch('/api/n8n')`.
3. **Animação React (`framer-motion`):** Evitou o caos no CSS bruto; usando o Wrapper `<AnimatePresence>` o form não apenas altera o HTML, como exibe desmonte (Exit animations) consistentes perante remoção da DOM Virtual do React 19.
4. **Resolução de Anomalias Reais:** Solucionar vazamento da UI do form na mobile limitando a caixa Flexbox, e entender o escopo de `Hydration Matching Error` contornando tags `<html>` que as extensões de fora (eg.: Jetski Tool) injetavam dinamicamente.

---

> Desenvolvido com 💜 por Pedro.
