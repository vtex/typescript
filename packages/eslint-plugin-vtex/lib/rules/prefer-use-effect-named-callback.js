const { getDocUrl } = require('../includes/getDocUrl.js')

const USE_EFFECT_NAME = 'useEffect'

const meta = {
  docs: {
    description: 'Prefer useEffect with named function or constant callbacks.',
    category: 'Best Practices',
    recommended: true,
    uri: getDocUrl('prefer-use-effect-named-callback'),
  },
}

function checkCallExpressionIsUseEffect(node) {
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

function create(context) {
  function checkUseEffectCallExpression(callExpressionNode) {
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
        message: 'Prefer useEffect with named function or constant callbacks.',
      })
    }
  }

  return {
    CallExpression: checkUseEffectCallExpression,
  }
}

module.exports = {
  meta,
  create,
}
