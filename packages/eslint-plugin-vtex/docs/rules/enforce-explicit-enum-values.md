# Enforce explicit `enum` values (enforce-explicit-enum-values)

`enum`s are a practical way to organize semantically related constant values. However, by implicitly defining values, `enum`s can lead to unexpected bugs if it's modified without paying attention to the order of its items.

## Rule Details

The following patterns are considered errors:

```js
const enum Status {
  Open,
  Closed,
}
```

If someone adds a new `Status` value to the top, both `Open` and `Closed` would have its values altered.

The following patterns are not warnings:

```js
const enum Status {
  Open = 0,
  Closed = 1,
}
```

If someone adds a new `Status` value to the top, nothing would change as this rule makes the constants order unimportant.

## When Not To Use It

If you don't care about enums having implicit values you can safely disable this rule.
