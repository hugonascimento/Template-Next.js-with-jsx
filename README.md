## Template 

Template Next.js TSX

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Created with

```sh
npx create-next-app@latest --ts
```

## First, install Prettier locally:

```sh
yarn add --dev --exact prettier
```

## Create a .prettierignore in root folder

Add:
build
coverage
.next
package.json
tsconfig.json
next-env.d.ts

## Create a .prettierrc.json in root folder

Add:
{
"trailingComma": "es5",
"tabWidth": 2,
"semi": true,
"singleQuote": true
}

## Run Prettier for first time

```sh
yarn prettier --write .
```

## Eslint with Prettier

```sh
yarn add --dev eslint-config-prettier
```

## Add prettier .slint.json

{
"extends": ["next/core-web-vitals", "prettier"]
}

## ESLint and Prettier work together

```sh
yarn add --dev eslint-config-prettier
```

Then open .eslintrc.json and add:
{
"extends": [
"some-other-config-you-use",
"prettier"
]
}

## ESLint

Since version 11.0.0, Next.js provides an integrated ESLint experience out of the box. Add next lint as a script to package.json:

## Change Head

_domument.tsx
Add Html lang="pt-BR"

## Typography

```sh
yarn add @fontsource/roboto
```

Add _app.tsx
import "@fontsource/roboto"; 

// Defaults to weight 400.

## Check errors with Lint

```sh
yarn next lint
```

## Check upgrades

```sh
yarn upgrade
```

## Run:

```sh
yarn dev
```

## These scripts refer to the different stages of developing an application:

yarn dev - Runs next dev to start Next.js in development mode

yarn build - Runs next build to build the application for production usage

yarn start - Runs next start to start a Next.js production server

yarn lint - Runs next lint to set up Next.js' built-in ESLint configuration

## NextJS?

λ (Server) server-side renders at runtime (uses getInitialProps or getServerSideProps)

○ (Static) automatically rendered as static HTML (uses no initial props)

● (SSG) automatically generated as static HTML + JSON (uses getStaticProps)

(ISR) incremental static regeneration (uses revalidate in getStaticProps)

Ңџбо Идѕсїщэлҭф
