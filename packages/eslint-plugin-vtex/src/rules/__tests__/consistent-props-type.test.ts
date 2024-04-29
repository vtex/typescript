import { RuleTester } from '@typescript-eslint/utils/dist/ts-eslint'

import { consistentPropsType } from '../consistent-props-type'

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
})

ruleTester.run('consistent-props-type', consistentPropsType, {
  valid: [
    {
      code: `
        const func = (args: unknown) => {}
      `,
    },

    {
      code: `
        type DividerProps = {}

        const Divider = (props: DividerProps) => {
          return <hr />
        }
      `,
    },

    {
      code: `
        type DividerProps = {}

        const Divider: FC<DividerProps> = (props) => {
          return <hr />
        }
      `,
    },

    {
      code: `
        type DividerProps = {}

        const Divider = <Props extends DividerProps>(props: Props) => {
          return <hr />
        }
      `,
    },

    {
      code: `
        const createComponent = <
          TComponent extends FC<any>,
          Props extends ComponentProps<T>
        >(Component: TComponent) => {
          const Wrapper = <T extends Props>(props: T) => {
            return <Component {...props} />
          }

          return Wrapper
        }
      `,
    },
  ],

  invalid: [
    {
      code: `
        const Divider = (props: { inline: boolean }) => {
          return <hr />
        }
      `,
      errors: [
        {
          messageId: 'invalidInlinePropsType',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        function Divider(props: { inline: boolean }) {
          return <hr />
        }
      `,
      errors: [
        {
          messageId: 'invalidInlinePropsType',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        function Divider({ inline }: { inline: boolean }) {
          return <hr />
        }
      `,
      errors: [
        {
          messageId: 'invalidInlinePropsType',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        function Divider({ inline, ...props }: { inline: boolean }) {
          return <hr />
        }
      `,
      errors: [
        {
          messageId: 'invalidInlinePropsType',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        function Divider({ ...props }: { inline: boolean }) {
          return <hr />
        }
      `,
      errors: [
        {
          messageId: 'invalidInlinePropsType',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        const Divider = (props: { inline: boolean } & { intersection: true }) => {
          return <hr />
        }
      `,
      errors: [
        {
          messageId: 'invalidInlinePropsType',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        const Divider = (props: { inline: boolean } | { union: true }) => {
          return <hr />
        }
      `,
      errors: [
        {
          messageId: 'invalidInlinePropsType',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        type Props = {}

        const Divider = (props: Props) => {
          return <hr />
        }
      `,
      errors: [
        {
          messageId: 'invalidPropsTypeName',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        type Props = {}

        const Divider: FC<Props> = (props) => {
          return <hr />
        }
      `,
      errors: [
        {
          messageId: 'invalidPropsTypeName',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        type DividerProps = {}

        const Divider: FC<DividerProps & { inline: true }> = (props) => {
          return <hr />
        }
      `,
      errors: [
        {
          messageId: 'propsTypeIncomplete',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        type DividerProps = {}

        const Divider: FC<DividerProps | { inline: true }> = (props) => {
          return <hr />
        }
      `,
      errors: [
        {
          messageId: 'propsTypeIncomplete',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        type Props = {}

        const Divider = <T extends Props>(props: T) => {
          return <hr />
        }
      `,
      errors: [
        { messageId: 'genericsPropsTypeName' },
        {
          messageId: 'invalidPropsTypeName',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        type Props = {}

        function Divider<T extends Props>(props: T) {
          return <hr />
        }
      `,
      errors: [
        { messageId: 'genericsPropsTypeName' },
        {
          messageId: 'invalidPropsTypeName',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        type DividerProps = {}

        const Divider = <Props extends DividerProps & { inline: true }>(props: Props) => {
          return <hr />
        }
      `,
      errors: [
        {
          messageId: 'propsTypeIncomplete',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },

    {
      code: `
        type DividerProps = {}

        const Divider = <Props extends DividerProps | { inline: true }>(props: Props) => {
          return <hr />
        }
      `,
      errors: [
        {
          messageId: 'propsTypeIncomplete',
          data: { expectedPropsTypeName: 'DividerProps' },
        },
      ],
    },
  ],
})
