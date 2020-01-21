module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    // Enforce explicit function return type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Prevent unused declared variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '_+',
      },
    ],

    // Enforce a consistent way of typing arrays
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
    // TODO https://github.com/vtex/javascript/issues/35
    '@typescript-eslint/array-type': [
      'off',
      {
        default: 'array-simple',
        readonly: 'array-simple',
      },
    ],

    // Enforce a consitent way to type objects
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // Disallow non null assertions (!), comes from the recommended config
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    // TODO, maybe disable
    '@typescript-eslint/no-non-null-assertion': 'warn',
  },
}
