# Prefer early returns over nesting in function declarations. (prefer-early-return)

A function whose last statement is a conditional statement adds unnecessary nesting and makes the code harder to read. An early return often makes the block more readable.

## Rule Details

The following patterns are considered warnings:

```js
function foo() {
  if (a) {
    b()
    c()
  }
}

function qux() {
  a()
  if (b) {
    c()
    d()
  }
}
```

The following patterns are not warnings:

```js
function foo() {
  if (!a) {
    return
  }

  b()
  c()
}

function bar() {
  if (a) {
    b()
    c()
  }

  d()
}

function baz() {
  if (a) {
    b()
    c()
  } else {
    d()
  }
}
```

### Options

This plugin takes an option object:

```ts
interface Options {
  maxStatements: number // default: 1
}
```

- `maxStatements`: specifies the maximum number of statements allowed in the conditional block. The following will **not** be considered a warning:

```js
function foo() {
  if (a) {
    b()
  }
}
```

## When Not To Use It

If you don't care about nesting and readability, or dislike early returns, you can safely disable this rule.
