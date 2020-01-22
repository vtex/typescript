# `eslint-config-vtex-react`

This package provides VTEX's `.eslintrc` for React projects as an extensible shared config.

## Installation

Assuming you already have ESLint installed, run:

```bash
yarn add -D eslint-config-vtex-react typescript prettier
```

## Usage

After installing the module, just add it to you `extends` array inside your `.eslintrc`.

```jsonc
// .eslintrc
{
  "extends": ["vtex-react"]
}
```

As any other eslint preset, it's possible to override some rules and configurations. We encourage trying to keep the closest possible to the preset rules, but every project is different and sometimes overriding is needed, use it carefully.

## References

- [`eslint-config-vtex` documentation](https://github.com/vtex/javascript/blob/master/packages/eslint-config-vtex/README.md)
- [`eslint-plugin-jsx-a11y` documentation](https://github.com/evcohen/eslint-plugin-jsx-a11y#readme)
- [`eslint-plugin-react` documentation](https://github.com/yannickcr/eslint-plugin-react)
- [`eslint-plugin-react-hooks` documentation](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
