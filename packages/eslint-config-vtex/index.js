module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vtex/recommended',
    './rules/prettier.js',
    './rules/errors.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js',
    './rules/best-practices.js',
    './rules/imports.js',
    './rules/typescript.js',
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
