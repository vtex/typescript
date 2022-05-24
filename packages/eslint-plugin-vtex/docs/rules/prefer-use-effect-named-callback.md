# Prefer early returns over nesting in function declarations. (prefer-use-effect-named-callback)

A useEffect callback with name makes the effect block more readable and documented.

## Rule Details

The following patterns are considered warnings:

```js
function Component() {
  useEffect(() => {}, [])
  
  // ...
}

function Component() {
  useEffect(function () {}, [])

  // ...
}
```

The following patterns are not warnings:

```js
const effectCallback = () => {}
function Component() {
  useEffect(effectCallback, [])

  // ...
}

function namedEffectCallback() {}
function Component() {
  useEffect(namedEffectCallback, [])
 
  // ...
}

function Component() {
  useEffect(function namedEffectCallback() {}, [])
 
  // ...
}
```

## When Not To Use It

If you don't care about readability, you can safely disable this rule.
