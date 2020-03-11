module.exports = {
  extends: [
    'eslint-config-vtex',
    './rules/react.js',
    './rules/react-hooks.js',
    './rules/react-a11y.js',
  ],
  env: {
    browser: true,
  },
  rules: {
    // imports
    // prevent people from importing native Node libs (url/path/crypto, etc) on browser env
    'import/no-nodejs-modules': 'error',
  },
}
