// Jest: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules
// Cypress: https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules
module.exports = {
  overrides: [
    // ! CYPRESS
    {
      files: ['**/cypress/**/*.{ts,tsx,js,jsx}'],
      extends: ['plugin:cypress/recommended'],
      rules: {
        // Enforce assertions before taking a screenshot
        // https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/assertion-before-screenshot.md
        'cypress/assertion-before-screenshot': 'warn',
      },
    },
    // ! JEST
    {
      // Run through every test file found
      files: ['*.{test,spec}.{ts,tsx,js,jsx}'],
      // Unless it's inside a cypress directory
      excludedFiles: ['**/cypress/**'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      rules: {
        // Enforce consistent a test method name
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md
        'jest/consistent-test-it': [
          'warn',
          {
            fn: 'test',
            withinDescribe: 'it',
          },
        ],

        // Disallow alias methods
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md
        // TODO: enable?
        'jest/no-alias-methods': 'off',

        // Disallow duplicate setup/teardown hooks
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md
        'jest/no-duplicate-hooks': 'error',

        // Disallow using expect().resolves
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-expect-resolves.md
        'jest/no-expect-resolves': 'error',

        // Suggest to have all hooks at top-level before tests
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md
        'jest/prefer-hooks-on-top': 'error',

        // Suggest jest.spyOn() instead of jest.fn()
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md
        'jest/prefer-spy-on': 'warn',

        // Suggest using test.todo()
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md
        'jest/prefer-todo': 'warn',

        // Disallow conditional logic inside tests
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md
        // TODO: enable?
        'jest/no-if': 'off',

        // Disallow return statements from tests
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
        // TODO: enable?
        'jest/no-test-return-statement': 'off',

        // Disallow toBeTruthy() and toBeFalsy()
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-truthy-falsy.md
        // TODO: enable?
        'jest/no-truthy-falsy': 'off',
      },
    },
  ],
}
