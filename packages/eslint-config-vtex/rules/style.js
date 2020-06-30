module.exports = {
  rules: {
    // Require camel case names
    // https://eslint.org/docs/rules/camelcase
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: false,
      },
    ],

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
    // https://eslint.org/docs/rules/max-params
    'max-params': [
      'warn',
      {
        max: 3,
      },
    ],

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
    // TODO discuss, maybe too much
    'no-negated-condition': 'off',

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
      // ban all enums
      {
        selector: 'TSEnumDeclaration:not([const=true])',
        message:
          "Literal types and enums, in many cases, solve the same problem while enum has some trade-offs that usually literal types don't. Consider using a literal type instead. See https://github.com/vtex/typescript/issues/60 for more information.",
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
    'padding-line-between-statements': [
      'warn',
      // empty lines after declarations
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      // allow to have none or one blank line between declarations
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      // enforce blank lines after multiline declarations
      {
        blankLine: 'always',
        prev: ['multiline-const', 'multiline-let', 'multiline-var'],
        next: '*',
      },
      // empty lines before returns
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      // empty lines between switch cases and breaks
      {
        blankLine: 'always',
        prev: ['case', 'break'],
        next: ['case', 'break', 'default'],
      },
      // always require blankline after function, class declarations and multiline blocks (if, try-catch, etc)
      {
        blankLine: 'always',
        prev: ['function', 'class', 'multiline-block-like'],
        next: '*',
      },
    ],

    // Require or disallow padding lines between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],

    //! Require eslint >= 6.7.0

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',
  },
}
