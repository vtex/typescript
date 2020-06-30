module.exports = {
  rules: {
    // Prefer an early return to prevent nesting and improve code readability.
    'vtex/prefer-early-return': [
      'warn',
      {
        maxStatements: 2,
      },
    ],
    'vtex/enforce-explicit-enum-values': 'error',
  },
}
