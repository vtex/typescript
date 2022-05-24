const { RuleTester } = require('eslint')

const rule = require('../../../lib/rules/prefer-use-effect-named-callback')

const ruleTester = new RuleTester()

const message = 'Prefer useEffect with named function or constant callbacks.'
const arrowFunctionError = {
  message,
  type: 'ArrowFunctionExpression',
}

const functionExpressionError = {
  message,
  type: 'FunctionExpression',
}

ruleTester.run('prefer-use-effect-named-callback', rule, {
  valid: [
    {
      code: `function Component() {
        useEffect(function namedEffect() {}, [])
        return null
      }`,
    },
    {
      code: `
        function Component() {
          React.useEffect(function namedEffect() {}, [])
          return null
        }
      `,
    },
    {
      code: `
      /* eslint-env es6 */
      const effect = () => {}
      function Component() {
        useEffect(effect, [])
        return null;
      }`,
    },
    {
      code: `
      /* eslint-env es6 */
      const effect = () => {}
      function Component() {
        React.useEffect(effect, [])
        return null;
      }`,
    },
    {
      code: `
      /* eslint-env es6 */
      const effect = function () {}
      function Component() {
        React.useEffect(effect, [])
        return null;
      }`,
    },
    {
      code: `
      /* eslint-env es6 */
      const effect = function () {}
      function Component() {
        React.useEffect(debouce(() => {}, 10), [])
        return null;
      }`,
    },
  ],

  invalid: [
    {
      code: `
        function Component() {
          useEffect(function () {}, [])
          return null
        }
      `,
      errors: [functionExpressionError],
    },
    {
      code: `
        function Component() {
          React.useEffect(function () {}, [])
          return null
        }
      `,
      errors: [functionExpressionError],
    },
    {
      code: `
        /* eslint-env es6 */
        function Component() {
          useEffect(() => {}, [])
          return null
        }
      `,
      errors: [arrowFunctionError],
    },
    {
      code: `
        /* eslint-env es6 */
        function Component() {
          React.useEffect(() => {}, [])
          return null
        }
      `,
      errors: [arrowFunctionError],
    },
  ],
})
