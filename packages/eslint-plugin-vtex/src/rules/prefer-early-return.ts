import type { TSESTree } from '@typescript-eslint/utils'

import { createRule } from '../createRule'

function isLonelyIfStatement(
  node: TSESTree.Node
): node is TSESTree.IfStatement {
  return node.type === 'IfStatement' && node.alternate == null
}

type Options = [{ maxStatements: number }]

export const preferEarlyReturn = createRule<Options, any, any>({
  name: 'prefer-early-return',

  meta: {
    type: 'layout',
    docs: {
      recommended: 'error',
      description:
        'Prefer early returns over full-body conditional wrapping in function declarations.',
    },
    schema: [
      {
        type: 'object',
        properties: {
          maxStatements: {
            type: 'integer',
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      default:
        'Prefer an early return to prevent nesting and improve code readability',
    },
  },

  defaultOptions: [{ maxStatements: 1 }],

  create(context) {
    const options = {
      ...context.options[0],
    }

    const { maxStatements } = options

    function isOffendingConsequent(consequentNode: TSESTree.Statement) {
      return (
        (consequentNode.type === 'ExpressionStatement' &&
          maxStatements === 0) ||
        (consequentNode.type === 'BlockStatement' &&
          consequentNode.body.length > maxStatements)
      )
    }

    function isOffendingIfStatement(ifNode: TSESTree.Statement) {
      return (
        isLonelyIfStatement(ifNode) && isOffendingConsequent(ifNode.consequent)
      )
    }

    function checkFunctionBody(
      fnNode:
        | TSESTree.FunctionDeclaration
        | TSESTree.FunctionExpression
        | TSESTree.ArrowFunctionExpression
    ) {
      const bodyNode = fnNode.body

      if (bodyNode.type !== 'BlockStatement' || bodyNode.body.length === 0) {
        return
      }

      const lastNode = bodyNode.body[bodyNode.body.length - 1]

      if (!isOffendingIfStatement(lastNode)) {
        return
      }

      context.report({
        node: lastNode,
        messageId: 'default',
      })
    }

    return {
      FunctionDeclaration: checkFunctionBody,
      FunctionExpression: checkFunctionBody,
      ArrowFunctionExpression: checkFunctionBody,
    }
  },
})
