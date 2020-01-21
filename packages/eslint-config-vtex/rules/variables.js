const confusingBrowserGlobals = require('confusing-browser-globals')

module.exports = {
  rules: {
    // Disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // Disallow specific globals
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(
      confusingBrowserGlobals
    ),

    // Disallow declaration of variables already declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // Disallow shadowing of names such as arguments
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // Disallow use of undefined when initializing variables
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // Disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'error',

    // Disallow declaration of variables that are not used in the code
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],

    // Disallow use of variables before they are defined
    // https://eslint.org/docs/rules/no-use-before-define
    // TODO https://github.com/vtex/front-end-coding-standard/issues/29
    'no-use-before-define': [
      'off',
      { functions: true, classes: true, variables: true },
    ],
  },
}
