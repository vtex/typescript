module.exports = {
  rules: {
    // Require camel case names
    // https://eslint.org/docs/rules/camelcase
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

    // Require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    'func-names': 'warn',

    // Enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    // TODO https://github.com/vtex/front-end-coding-standard/issues/30
    'line-comment-position': [
      'off',
      {
        position: 'above',
        applyDefaultPatterns: true,
      },
    ],

    // Disallow comments inline after code
    // https://eslint.org/docs/rules/no-inline-comments
    // TODO https://github.com/vtex/front-end-coding-standard/issues/30
    'no-inline-comments': 'off',

    // Require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always'],

    // Require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always',
      },
    ],

    // Limit the number of parameters that can be used in the function declaration.
    // TODO https://github.com/vtex/front-end-coding-standard/issues/16
    'max-params': ['off', 3],

    // Require a capital letter for constructors
    // https://eslint.org/docs/rules/new-cap
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],

    // Disallow use of the Array constructor
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // Disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // Disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'error',

    // Disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'error',

    // Disallow use of the Object constructor
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // Disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // Disallow the use of Boolean literals in conditional expressions
    // Also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Allow just one var statement per function
    // https://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // Require assignment operator shorthand where possible or prohibit it entirely
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // Require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['-', '+', '?', '!'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['-', '+', '?', '!'],
          balanced: true,
        },
      },
    ],

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    // TODO https://github.com/vtex/front-end-standards/issues/32
    'padding-line-between-statements': [
      'off',
      // empty lines after declarations
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],

    //! Require eslint >= 6.7.0

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',
  },
}
