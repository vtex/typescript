/* eslint-disable vtex/prefer-early-return */
import type { TSESTree } from '@typescript-eslint/utils'

import { isComponentName } from '../utils/react/isComponentName'
import { createRule } from '../createRule'
import { isInsideAnotherFunction } from '../utils/estree/isInsideAnotherFunction'
import { getFunctionNodeName } from '../utils/estree/getFunctionNodeName'
import { isFunctionNode } from '../utils/estree/isFunctionNode'

export const consistentPropsType = createRule({
  name: 'consistent-props-type',

  meta: {
    type: 'suggestion',
    docs: {
      recommended: 'warn',
      description: 'Consistent way to define props type',
    },
    messages: {
      invalidPropsTypeName:
        'Invalid props type name. Must be: {{expectedPropsTypeName}}',

      propsTypeIncomplete:
        'Invalid inline props type. {{expectedPropsTypeName}} must define all the props.',

      invalidInlinePropsType:
        'Invalid inline props type. You must to create an type {{expectedPropsTypeName}}',

      genericsPropsTypeName: 'Invalid generics props type name. Must be: Props',
    },
    schema: [],
  },

  defaultOptions: [],

  create(context) {
    return {
      ':function > :matches(Identifier, ObjectPattern) > TSTypeAnnotation'(
        node: TSESTree.TSTypeAnnotation
      ) {
        if (isInsideAnotherFunction(context)) return

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const functionNode = context
          .getAncestors()
          .reverse()
          .find(isFunctionNode)!

        const functionName = getFunctionNodeName(functionNode)
        const [typeParameter] = functionNode.typeParameters?.params ?? []

        if (!isComponentName(functionName)) return

        const expectedPropsTypeName = `${functionName}Props`

        if (typeParameter) {
          if (typeParameter.name.name !== 'Props') {
            context.report({
              node: typeParameter.name,
              messageId: 'genericsPropsTypeName',
            })
          }

          if (
            typeParameter.constraint &&
            typeParameter.constraint?.type !== 'TSTypeReference'
          ) {
            context.report({
              node: typeParameter.constraint,
              messageId: 'propsTypeIncomplete',
              data: { expectedPropsTypeName },
            })
          }

          if (
            typeParameter.constraint?.type === 'TSTypeReference' &&
            typeParameter.constraint.typeName.type === 'Identifier' &&
            typeParameter.constraint.typeName.name !== expectedPropsTypeName
          ) {
            context.report({
              node: typeParameter.constraint,
              messageId: 'invalidPropsTypeName',
              data: { expectedPropsTypeName },
            })
          }

          return
        }

        if (node.typeAnnotation.type !== 'TSTypeReference') {
          context.report({
            node: node.typeAnnotation,
            messageId: 'invalidInlinePropsType',
            data: { expectedPropsTypeName },
          })

          return
        }

        if (
          node.typeAnnotation.typeName.type === 'Identifier' &&
          node.typeAnnotation.typeName.name !== expectedPropsTypeName
        ) {
          context.report({
            node: node.typeAnnotation,
            messageId: 'invalidPropsTypeName',
            data: { expectedPropsTypeName },
          })
        }
      },
      'VariableDeclarator > Identifier > TSTypeAnnotation'(
        node: TSESTree.TSTypeAnnotation & { parent: TSESTree.Identifier }
      ) {
        if (isInsideAnotherFunction(context)) return

        const expectedPropsTypeName = `${node.parent.name}Props`

        if (
          node.typeAnnotation.type === 'TSTypeReference' &&
          node.typeAnnotation.typeName.type === 'Identifier' &&
          node.typeAnnotation.typeName.name === 'FC' &&
          node.typeAnnotation.typeParameters
        ) {
          const [typeParameter] = node.typeAnnotation.typeParameters.params

          if (
            typeParameter.type === 'TSTypeReference' &&
            typeParameter.typeName.type === 'Identifier' &&
            typeParameter.typeName.name !== expectedPropsTypeName
          ) {
            context.report({
              node: typeParameter,
              messageId: 'invalidPropsTypeName',
              data: { expectedPropsTypeName },
            })
          }

          if (typeParameter.type !== 'TSTypeReference') {
            context.report({
              node: typeParameter,
              messageId: 'propsTypeIncomplete',
              data: { expectedPropsTypeName },
            })
          }
        }
      },
    }
  },
})
