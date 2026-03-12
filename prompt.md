Atue como um Especialista em Next.js e TypeScript.

Objetivo: Gere o código de uma Landing Page "mockada" dentro da estrutura do Next.js@13.1.6 (App Router).

Diretrizes Técnicas:

Linguagem: Use TypeScript rigorosamente (defina interfaces para as props dos componentes e tipos para os dados mockados).

Bibliotecas: Baseie-se no meu arquivo package.json. Use lucide-react para ícones e tailwind-merge / clsx se estiverem presentes.

Componentização: Separe a página em componentes menores dentro da mesma resposta ou em arquivos sugeridos (ex: Hero.tsx, Navbar.tsx).

Client vs Server: Identifique onde é necessário usar 'use client' (ex: botões com interatividade ou animações Framer Motion).

🎨 Paleta de Cores (Preencha para aplicar no Tailwind):
Primary (Brand): [#5FD23C]

Secondary: Escolha de acordo com a página

Accent/CTA: [#5FD23C]

Background: [#03092A]

Text: [#FFFFFF] sob contraste [#000000]

Estrutura da Landing Page (Mocked Data):
Crie as seguintes seções utilizando as cores acima via classes do Tailwind:

Navigation: Sticky navbar com links de âncora e um botão de "Get Started".

Hero: Headline com balance, subtexto cinza e uma div de placeholder com gradiente representando uma imagem/dashboard.

Features Grid: Use um Array de objetos com id, title, description e icon para mapear os cards.

Testimonials: Seção com 3 cards contendo avatar (use https://i.pravatar.cc/150), name e quote.

Pricing (Opcional): Tabela simples com 3 planos (Free, Pro, Enterprise).

Footer: Grid com 4 colunas e links sociais.

Instrução final: Use o comando @workspace para ler meu tailwind.config.ts e garantir que as cores batam com o meu tema, se possível.