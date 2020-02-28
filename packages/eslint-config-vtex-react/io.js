module.exports = {
  extends: ['./index.js'],
  rules: {
    // Disallow specified import patterns
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message:
              'Lodash is a heavy library. Import only the methods you need or use native ones instead',
          },
          {
            name: 'ramda',
            message:
              'Ramda is a heavy library. Import only the methods you need or use native ones instead',
          },
        ],
        // Patterns don't support messages yet :(
        // https://github.com/eslint/eslint/issues/11843
        patterns: [],
      },
    ],
  },
}
