# `eslint-config-vtex`

This package provides VTEX's `.eslintrc` as an extensible shared config.

## Installation

Give that you already have ESLint installed, run:

```bash
yarn add -D eslint-config-vtex typescript prettier
```

## Usage

After installing the module, just add it to your `extends` array inside your `.eslintrc`.

```jsonc
// .eslintrc
{
  "extends": ["vtex"]
}
```

As any other eslint preset, it's possible to override some rules and configurations. We encourage trying to keep the closest possible to the preset rules, but every project is different and sometimes overriding is needed, use it carefully.

### For typescript

The preset will automatically load Typescript rules when dealing with `.ts` or `.tsx` files. However, there are some rules that require type-checking. This means that a `tsconfig.json`, which includes all files supposed to be linted, must be present. If your existing configuration does not include all of the files you would like to lint, you can create a separate `tsconfig.eslint.json`, at the root of your project, as follows:

```jsonc
// tsconfig.eslint.json
{
  "extends": "./tsconfig.json",
  "include": ["**/*.ts", "**/*.tsx", "**/*.js"],
  "exclude": []
}
```

And you should be good to go.

### For Javascript

Sometimes you want to use modern, not yet officially supported, syntax in your Javascript files, such as dynamic `import()`. This can be achieved by using the [`babel-eslint` parser](https://github.com/babel/babel-eslint). For size reasons, we don't include it in this preset but it's extremely simple to configure it:

```bash
yarn add -D babel-eslint
```

```jsonc
// .eslintrc
{
  "extends": "vtex",
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  }
}
```

If a project uses both Typescript and Javascript, you can configure the parser inside an `override` block:

```jsonc
// .eslintrc
{
  "extends": "vtex",
  "overrides": [
    {
      "files": ["*.js", "*.jsx"],
      "parser": "babel-eslint",
      "parserOptions": {
        "sourceType": "module"
      }
    }
  ]
}
```

Please check the [`babel-eslint` documentation](https://github.com/babel/babel-eslint#additional-parser-configuration) for further options.

## References

- [`@typescript-eslint` documentation](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md)
- [`eslint-plugin-import` documentation](https://github.com/benmosher/eslint-plugin-import)
- [`eslint-plugin-prettier` documentation](https://github.com/prettier/eslint-plugin-prettier)
