import type { Linter } from 'eslint'

export const recommended: Linter.BaseConfig = {
  rules: {
    // Prefer an early return to prevent nesting and improve code readability.
    'vtex/prefer-early-return': [
      'warn',
      {
        maxStatements: 2,
      },
    ],

    'vtex/consistent-props-type': 'off',
  },
}
