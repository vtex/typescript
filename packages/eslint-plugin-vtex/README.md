# `eslint-plugin-vtex`

This package provides VTEX's custom ESLint rules.

## Installation

Give that you already have ESLint installed, run:

```bash
yarn add -D eslint-plugin-vtex
```

## Usage

After installing the module, just add it to your `plugins` array inside your `.eslintrc`.

```jsonc
// .eslintrc
{
  ...,
  "plugins": ["vtex"]
}
```

## Rules

This plugin provides the following custom ESLint rules:

- [`prefer-early-return`](/packages/eslint-plugin-vtex/docs/rules/prefer-early-return.md): Suggest early returning to prevent nesting and improve code readability.
- [`enforce-explicit-enum-values`](/packages/eslint-plugin-vtex/docs/rules/enforce-explicit-enum-values.md): Enforce explicit enum values.
