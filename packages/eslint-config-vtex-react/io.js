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
                  'You might not need lodash, try using the default functions from the browser',
              },
              {
                name: 'ramda',
                message:
                  'You might not need ramda, try using the default functions from the browser',
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
