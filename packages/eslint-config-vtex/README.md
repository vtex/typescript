# eslint-config-vtex

This package provides VTEX's `.eslintrc` as an extensible shared config.

## Installation

Give that you already have ESLint installed, run:

```bash
yarn add -D eslint-config-vtex typescript prettier
```

## Usage

After installing the module, just add it to you `extends` array inside your `.eslintrc`.

```jsonc
// .eslintrc
{
  "extends": ["vtex"]
}
```

As any other eslint preset, it's possible to override some rules and configurations. We encourage trying to keep the closest possible to the preset rules, but every project is different and sometimes overriding is needed, use it carefully.

### For typescript

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

And you should be good to go.

## References

- [`@typescript-eslint` documentation](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md)
- [`eslint-plugin-import` documentation](https://github.com/benmosher/eslint-plugin-import)
- [`eslint-plugin-prettier` documentation](https://github.com/prettier/eslint-plugin-prettier)
