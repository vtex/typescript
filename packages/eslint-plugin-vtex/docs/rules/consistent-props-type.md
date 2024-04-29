# Enforce the consistent way to define the props type (`vtex/consistent-props-type`)

Examples of **incorrect** code for this rule:

- Invalid props type name. Must be: DividerProps

```tsx
type Props = {}

const Divider = (props: Props) => {
  return <hr {...props} />
}
```

- Invalid inline props type. DividerProps must define all the props.

```tsx
type DividerProps = {}

const Divider = (props: DividerProps & { inline: true }) => {
  return <hr {...props} />
}
```

- Invalid generics props type name. Must be: Props

```tsx
type DividerProps = {}

const Divider = <T extends DividerProps>(props: T) => {
  return <hr />
}
```

Examples of **correct** code for this rule:

```tsx
type DividerProps = {}

const Divider = (props: DividerProps) => {
  return <hr {...props} />
}
```

```tsx
type DividerProps = {}

const Divider = <Props extends DividerProps>(props: Props) => {
  return <hr />
}
```
