# eslint-config-vtex

This package provides VTEX's `.eslintrc` as an extensible shared config.

## Installation

Give that you already have ESLint installed, run:

```bash
yarn add -D eslint-config-vtex typescript prettier
```

Then add it to your ESLint configuration:

```json
{
  "extends": "eslint-config-vtex"
}
```

## Usage

The preset will automatically load Typescript rules when dealing with `.ts` or `.tsx` files. However, there are some rules that type-check to do their work. This means that a `tsconfig`, which includes all files supposed to be linted, must be present. If your existing configuration does not include all of the files you would like to lint, you can create a separate `tsconfig.eslint.json` as follows:

```jsonc
// tsconfig.eslint.json
{
  "extends": "@vtex/tsconfig",
  "include": [
    "src/**/*.ts",
    "test/**/*.ts",
    "typings/**/*.ts",
    // ...
    // if you have a mixed JS/TS codebase, don't forget to include your JS files
    "src/**/*.js"
  ]
}
```
