const { ESLintUtils } = require('@typescript-eslint/experimental-utils')

const rule = require('../../../lib/rules/prefer-enum-initializers.js')

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
})

ruleTester.run('prefer-enum-initializers', rule, {
  valid: [
    {
      code: `const enum Status {
        Open = 0,
        Close = 2,
      }
      `,
    },
  ],

  invalid: [
    {
      code: `const enum Status {
        Open,
        Close,
      }
      `,
      errors: [
        {
          message: 'Prefer defining a initializer for "Open".',
        },
        {
          message: 'Prefer defining a initializer for "Close".',
        },
      ],
    },
  ],
})
