module.exports = {
  extends: [
    'eslint-config-vtex',
    './rules/react.js',
    './rules/react-hooks.js',
    './rules/react-a11y.js',
  ],
  overrides: [
    {
      files: '**/*.{ts,tsx,js,jsx}',
      excludedFiles: ['*{_,.}{test,spec}.{ts,tsx,js,jsx}', '__tests__/**/*'],
      // activate these rules in react files not related to testing
      rules: {
        // prevent people from importing native Node libs (url/path/crypto, etc) on browser env
        'import/no-nodejs-modules': 'error',
      },
    },
  ],
}
