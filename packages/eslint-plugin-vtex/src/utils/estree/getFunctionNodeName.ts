import type { TSESTree } from '@typescript-eslint/utils'

export const getFunctionNodeName = (node: TSESTree.Node) => {
  if (node.type === 'FunctionDeclaration') {
    return node.id?.name ?? ''
  }

  if (
    node.parent?.type === 'VariableDeclarator' &&
    node.parent.id.type === 'Identifier'
  ) {
    return node.parent.id.name
  }

  return ''
}
