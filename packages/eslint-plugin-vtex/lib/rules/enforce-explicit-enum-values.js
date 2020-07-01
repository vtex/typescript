const { getDocUrl } = require('../includes/getDocUrl.js')

const meta = {
  docs: {
    description: 'Enforce the usage of explicit values for enum entries.',
    category: 'Best Practices',
    recommended: 'error',
    uri: getDocUrl('enforce-explict-enum-values'),
  },
}

function create(context) {
  function checkEnum(enumNode) {
    const { members } = enumNode

    for (const member of members) {
      if (member.initializer != null) {
        continue
      }

      context.report({
        node: member,
        message: `The value of the constant "${member.id.name}" should be explicitly defined.`,
      })
    }
  }

  return {
    TSEnumDeclaration: checkEnum,
  }
}

module.exports = {
  meta,
  create,
}
