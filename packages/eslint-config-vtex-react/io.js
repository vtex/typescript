module.exports = {
  extends: ['./index.js'],
  overrides: [
    {
      files: '**/*.{ts,tsx,js,jsx}',
      excludedFiles: ['*{_,.}{test,spec}.{ts,tsx,js,jsx}', '__tests__/**/*'],
      // activate these rules in react files not related to testing
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
    },
  ],
}
