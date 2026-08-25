# Dorah Landing Page

Landing page institucional da Dorah, plataforma de saúde mental corporativa.

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

O projeto usa o App Router do Next.js e separa a interface por responsabilidade:

```text
app/                Layout, página principal e estilos globais
components/         Componentes reutilizáveis de UI e animações
features/landing/   Seções da landing page e seus componentes
public/             Arquivos estáticos
```

A página principal (`app/page.tsx`) compõe as seções a partir de `features/landing`. Os estilos ficam organizados em `app/styles`, e o alias `@/*` aponta para a raiz do projeto.

## Build de produção

```bash
npm run build
npm run start
```
