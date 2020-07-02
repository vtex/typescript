const { getDocUrl } = require('../includes/getDocUrl.js')

const meta = {
  docs: {
    description: 'Prefer enum values with initializers',
    category: 'Best Practices',
    recommended: 'error',
    uri: getDocUrl('prefer-enum-'),
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
        message: `Prefer defining a initializer for "${member.id.name}".`,
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
