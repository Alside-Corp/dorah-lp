# Dorah Landing Page

Landing page institucional da Dorah, plataforma de saúde mental corporativa.

A Dorah cria um espaço seguro para que pessoas conversem com psicólogos no próprio ritmo. A plataforma ajuda a identificar sinais antes que eles se transformem em crises, oferecendo escuta humana e acompanhamento contínuo.

Para psicólogos, a Dorah organiza contexto e histórico para apoiar o cuidado clínico. Para o RH, apresenta apenas tendências e indicadores agregados, sem expor conversas, relatos ou dados individuais. Essa separação protege a confiança das pessoas e apoia a empresa na compreensão dos riscos psicossociais e da NR-1.

## Requisitos e stack

- Node.js: `20.9.0` ou superior
- npm para instalar dependências e executar os scripts
- Next.js: `16.3.1`
- React: `19.2.8`
- TypeScript em modo estrito, Tailwind CSS 4 e Zod 4

As dependências estão em [package.json](package.json), com as versões resolvidas em [package-lock.json](package-lock.json).

## Instalar e rodar

Na raiz do projeto, instale as dependências registradas no lockfile e inicie o servidor:

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Comandos

| Comando                | Função                                            |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Inicia o servidor de desenvolvimento.             |
| `npm run build`        | Gera o build de produção.                         |
| `npm start`            | Serve o build de produção, após executar `build`. |
| `npm run typecheck`    | Verifica os tipos com TypeScript.                 |
| `npm run format`       | Formata os arquivos com Prettier.                 |
| `npm run format:check` | Confere a formatação sem alterar arquivos.        |

## Arquitetura

O projeto usa Next.js App Router, React e TypeScript estrito, com FSD adaptado ao Next.js:

```text
src/app/                       Rotas, layout, providers e estilos globais
src/views/landing/             Composição da página (camada pages do FSD)
src/widgets/                   Seções da landing page
src/features/request-contact/ Formulário, schema e envio de contato
src/shared/                   UI, assets e utilitários compartilhados
public/                       Arquivos estáticos e definição do Netlify Forms
```

A rota `src/app/page.tsx` exporta a página de `views/landing`. Usamos `views` para evitar conflito com o Pages Router. Imports seguem a direção `app → views → widgets → features → shared`; cada slice expõe sua API por `index.ts`. O alias `@/*` aponta para `src/*`. Não há necessidade atual de uma camada `entities`.

Conteúdo específico de cada seção fica no respectivo widget, geralmente em `model/content.ts`; `shared` contém recursos reutilizáveis. Slices distintos da mesma camada não devem importar uns aos outros. `app` e `shared` permitem dependências entre seus próprios segmentos.

As regras de dependência FSD são verificadas durante a revisão de código. Não há script de lint ou teste automatizado de arquitetura no `package.json`.

## Decisões de stack

- **Renderização:** composição e seções em Server Components, com pré-renderização estática. Componentes interativos usam `use client`. SSR por requisição não é necessário para o conteúdo institucional atual.
- **Assets:** logos usam `next/image`; fontes são do sistema, sem download externo.
- **Tailwind CSS:** integrado via PostCSS, com adoção por componente. Campos, labels, grid, botão e feedback do formulário usam utilities. Cores, fontes, escala tipográfica, raios, sombras e espaçamento são vinculados aos tokens existentes em `styles/tailwind.css`. O Preflight não é importado; o reset atual é preservado.
- **Movimento:** Lenis e animações GSAP só são ativados quando `prefers-reduced-motion` permite, com limpeza automática quando a preferência muda. Cards respeitam a mesma preferência; rolagem nativa suave também é desativada no modo reduzido.
- **Zod:** valida e normaliza nome, e-mail, telefone e empresa antes do envio. Tipos são derivados do schema na feature `request-contact`.
- **React Query:** não instalado. Não há consultas remotas, cache compartilhado ou revalidação no cliente. O único request é uma submissão ao Netlify Forms, atendida por `fetch` e estado local. Reavaliar se surgirem consultas interativas a APIs.

### Convenção de estilos

Os tokens visuais ficam em [tokens.css](src/app/styles/tokens.css), e o mapeamento para Tailwind está em [tailwind.css](src/app/styles/tailwind.css). O espaçamento vertical das seções é definido por `.section-pad` em [layout.css](src/app/styles/layout.css), variando de `3rem` a `4.5rem` conforme a largura da tela.

Use utilities para layout, espaçamento, tipografia e estados dos componentes novos ou migrados. Prefira os tokens de marca (`text-brand-sm`, `text-brand-grafite`, `rounded-brand-md`, `shadow-brand-lift`) ou semânticos (`bg-surface-page`, `text-text-primary`); o espaçamento numérico usa `--space-1` como unidade.

CSS permanece para os componentes ainda não migrados e efeitos elaborados, como as camadas de vidro do formulário. Ao migrar uma propriedade para Tailwind, remova sua declaração antiga no CSS, incluindo regras responsivas e estados. Não mantenha a mesma propriedade sob controle dos dois sistemas: o CSS legado sem camada tem precedência sobre utilities em camadas. Valores arbitrários ficam reservados a efeitos e medidas específicos que ainda não têm token. Animações novas devem tratar movimento reduzido.

## Formulário

O transporte continua sendo o Netlify Forms, com definição estática em `public/__forms.html`, honeypot e envio URL-encoded. Zod roda no navegador e não substitui validação no servidor: o endpoint é gerenciado pela Netlify. Se houver uma API própria, aplicar o schema também na entrada do servidor.

O recebimento real deve ser verificado em um deploy Netlify com Forms habilitado; `next dev` não emula esse serviço. Não habilitar retries automáticos para evitar contatos duplicados.

A definição em [public/__forms.html](public/__forms.html) deve permanecer sincronizada com os campos de [request-contact](src/features/request-contact). O envio usa `POST` para `/__forms.html`, com nome de formulário `solicitar-contato`.

## Deploy

A configuração está em [netlify.toml](netlify.toml): build com `npm run build`, publicação de `.next` e integração com `@netlify/plugin-nextjs`.

Confirme que o Netlify Forms está habilitado e valide o recebimento de um contato no ambiente publicado. Um build bem-sucedido não confirma o recebimento do formulário.

## Verificação

Antes de publicar, execute:

```bash
npm run typecheck
npm run format:check
npm run build
```

Confira também a navegação por âncoras, o menu mobile, a abertura das perguntas frequentes, o formulário e a preferência por movimento reduzido em desktop e mobile.
