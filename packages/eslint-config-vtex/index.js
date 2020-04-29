module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vtex/recommended',
    './rules/errors.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js',
    './rules/best-practices.js',
    './rules/imports.js',
    './rules/typescript.js',
    './rules/prettier.js',
    './rules/tests.js',
  ],
  plugins: ['vtex'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  globals: {
    __DEV__: true,
  },
}
