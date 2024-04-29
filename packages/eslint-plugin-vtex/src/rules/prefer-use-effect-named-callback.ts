import type { TSESTree } from '@typescript-eslint/utils'

import { createRule } from '../createRule'

const USE_EFFECT_NAME = 'useEffect'

function checkCallExpressionIsUseEffect(node: TSESTree.Node) {
  if (node.type !== 'CallExpression') {
    return false
  }

  if (!node.callee) {
    return false
  }

  // verify this scenario `useEffect(...)`
  if (
    node.callee.type === 'Identifier' &&
    node.callee.name === USE_EFFECT_NAME
  ) {
    return true
  }

  // verify this scenario `React.useEffect(...)`
  if (
    node.callee.type === 'MemberExpression' &&
    node.callee.property &&
    node.callee.property.type === 'Identifier' &&
    node.callee.property.name === USE_EFFECT_NAME
  ) {
    return true
  }

  return false
}

export const preferUseEffectNamedCallback = createRule({
  name: 'prefer-use-effect-named-callback',

  meta: {
    type: 'layout',
    docs: {
      recommended: 'error',
      description:
        'Prefer useEffect with named function or constant callbacks.',
    },
    messages: {
      default: 'Prefer useEffect with named function or constant callbacks.',
    },
    schema: [],
  },

  defaultOptions: [],

  create(context) {
    function checkUseEffectCallExpression(
      callExpressionNode: TSESTree.CallExpression
    ) {
      if (!checkCallExpressionIsUseEffect(callExpressionNode)) {
        return
      }

      const [useEffectFirstArgument] = callExpressionNode.arguments
      let hasError = false

      /* check this case `useEffect(() => {}, [])` */
      if (
        useEffectFirstArgument.type === 'ArrowFunctionExpression' &&
        useEffectFirstArgument.id === null
      ) {
        hasError = true
      }

      /* check this case `useEffect(function () {}, [])` */
      if (
        useEffectFirstArgument.type === 'FunctionExpression' &&
        useEffectFirstArgument.id === null
      ) {
        hasError = true
      }

      if (hasError) {
        context.report({
          node: useEffectFirstArgument,
          messageId: 'default',
        })
      }
    }

    return {
      CallExpression: checkUseEffectCallExpression,
    }
  },
})
