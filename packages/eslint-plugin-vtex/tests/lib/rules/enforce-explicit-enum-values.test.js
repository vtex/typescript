const { ESLintUtils } = require('@typescript-eslint/experimental-utils')

const rule = require('../../../lib/rules/enforce-explicit-enum-values.js')

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
})

ruleTester.run('prefer-early-return', rule, {
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
          message:
            'The value of the constant "Open" should be explicitly defined.',
        },
        {
          message:
            'The value of the constant "Close" should be explicitly defined.',
        },
      ],
    },
  ],
})
