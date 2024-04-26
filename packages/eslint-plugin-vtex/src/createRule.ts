import { ESLintUtils } from '@typescript-eslint/utils'

export const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/vtex/typescript/tree/main/packages/eslint-plugin-vtex/docs/${name}.md`
)
