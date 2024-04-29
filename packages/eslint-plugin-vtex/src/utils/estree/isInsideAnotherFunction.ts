import type { RuleContext } from '@typescript-eslint/utils/dist/ts-eslint'

import { isFunctionNode } from './isFunctionNode'

export const isInsideAnotherFunction = (
  context: RuleContext<string, readonly unknown[]>
) => {
  const functions = context.getAncestors().filter(isFunctionNode)

  return functions.length > 1
}
