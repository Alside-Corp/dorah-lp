# Dorah Landing Page

Landing page institucional da Dorah, plataforma de saúde mental corporativa.

A Dorah cria um espaço seguro para que pessoas conversem com psicólogos no próprio ritmo. A plataforma ajuda a identificar sinais antes que eles se transformem em crises, oferecendo escuta humana e acompanhamento contínuo.

Para psicólogos, a Dorah organiza contexto e histórico para apoiar o cuidado clínico. Para o RH, apresenta apenas tendências e indicadores agregados, sem expor conversas, relatos ou dados individuais. Essa separação protege a confiança das pessoas e apoia a empresa na compreensão dos riscos psicossociais e da NR-1.

## Versões

- Node.js: `20.9.0` ou superior
- npm: `9.9.4`
- Next.js: `16.3.1`
- React: `^19.2.8`

## Clonar o projeto

```bash
git clone https://github.com/Alside-Corp/dorah-lp.git
cd dorah-lp
```

## Instalar e rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Arquitetura

O projeto usa Next.js App Router, React e TypeScript estrito, com FSD adaptado ao Next.js:

```text
src/app/                       Rotas, layout, providers e estilos globais
src/views/landing/             Composição da página (camada pages do FSD)
src/widgets/                   Seções da landing page
src/features/request-contact/ Formulário, schema e envio de contato
src/shared/                   UI, configuração, assets e utilitários compartilhados
public/                       Arquivos estáticos e definição do Netlify Forms
```

A rota `src/app/page.tsx` exporta a página de `views/landing`. Usamos `views` para evitar conflito com o Pages Router. Imports seguem a direção `app → views → widgets → features → shared`; cada slice expõe sua API por `index.ts`. O alias `@/*` aponta para `src/*`. Não há necessidade atual de uma camada `entities`.

## Decisões de stack

- **Renderização:** composição e seções em Server Components, com pré-renderização estática. Componentes interativos usam `use client`. SSR por requisição não é necessário para o conteúdo institucional atual.
- **Assets:** logos usam `next/image`; fontes são do sistema, sem download externo.
- **Tailwind CSS:** integrado via PostCSS. A adoção é incremental, começando pelo feedback do formulário. O CSS existente mantém os estilos visuais e o reset; o Preflight não é importado para evitar alterações globais. As utilities usam os tokens de marca existentes.
- **Zod:** valida e normaliza nome, e-mail, telefone e empresa antes do envio. Tipos são derivados do schema na feature `request-contact`.
- **React Query:** não instalado. Não há consultas remotas, cache compartilhado ou revalidação no cliente. O único request é uma submissão ao Netlify Forms, atendida por `fetch` e estado local. Reavaliar se surgirem consultas interativas a APIs.

## Formulário

O transporte continua sendo o Netlify Forms, com definição estática em `public/__forms.html`, honeypot e envio URL-encoded. Zod roda no navegador e não substitui validação no servidor: o endpoint é gerenciado pela Netlify. Se houver uma API própria, aplicar o schema também na entrada do servidor.

O recebimento real deve ser verificado em um deploy Netlify com Forms habilitado; `next dev` não emula esse serviço. Não habilitar retries automáticos para evitar contatos duplicados.

## Verificação

A referência completa para recriar a landing no Figma está em [docs/README.md](docs/README.md), com guia visual, PDF, tokens, componentes, estados, assets e regras responsivas.

```bash
npm run lint
npm run typecheck
npm run build
```

Referências: [Tailwind + Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs), [Zod](https://zod.dev/basics) e [FSD + Next.js](https://feature-sliced.design/docs/guides/tech/with-nextjs).
