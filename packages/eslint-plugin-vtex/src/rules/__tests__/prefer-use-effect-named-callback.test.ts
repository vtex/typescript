import { RuleTester } from '@typescript-eslint/utils/dist/ts-eslint'
import { AST_NODE_TYPES } from '@typescript-eslint/types'

import { preferUseEffectNamedCallback } from '../prefer-use-effect-named-callback'

const ruleTester = new RuleTester()

const arrowFunctionError = {
  messageId: 'default',
  type: AST_NODE_TYPES.ArrowFunctionExpression,
} as const

const functionExpressionError = {
  messageId: 'default',
  type: AST_NODE_TYPES.FunctionExpression,
} as const

ruleTester.run(
  'prefer-use-effect-named-callback',
  preferUseEffectNamedCallback,
  {
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
  }
)
