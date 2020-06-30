const { getDocUrl } = require('../includes/getDocUrl.js')

const DEFAULT_OPTIONS = {
  maxStatements: 1,
}

const meta = {
  docs: {
    description:
      'Prefer early returns over full-body conditional wrapping in function declarations.',
    category: 'Best Practices',
    recommended: true,
    uri: getDocUrl('prefer-early-return'),
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
}

function isLonelyIfStatement(node) {
  return node.type === 'IfStatement' && node.alternate == null
}

function create(context) {
  const options = {
    ...DEFAULT_OPTIONS,
    ...(context.options[0] || null),
  }

  const { maxStatements } = options

  function isOffendingConsequent(consequentNode) {
    return (
      (consequentNode.type === 'ExpressionStatement' && maxStatements === 0) ||
      (consequentNode.type === 'BlockStatement' &&
        consequentNode.body.length > maxStatements)
    )
  }

  function isOffendingIfStatement(ifNode) {
    return (
      isLonelyIfStatement(ifNode) && isOffendingConsequent(ifNode.consequent)
    )
  }

  function checkFunctionBody(fnNode) {
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
      message:
        'Prefer an early return to prevent nesting and improve code readability',
    })
  }

  return {
    FunctionDeclaration: checkFunctionBody,
    FunctionExpression: checkFunctionBody,
    ArrowFunctionExpression: checkFunctionBody,
  }
}

module.exports = {
  meta,
  create,
}
