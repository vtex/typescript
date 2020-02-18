# VTEX Javascript Style Guide

[![Downloads](https://img.shields.io/npm/dm/eslint-config-vtex.svg)](https://www.npmjs.com/package/eslint-config-vtex)
[![Downloads](https://img.shields.io/npm/dm/eslint-config-vtex-react.svg)](https://www.npmjs.com/package/eslint-config-vtex-react)

As projects get bigger and more people start collaborating, it gets harder to maintain them and implement new functionalities. By defining a standard way to write Javascript applications, we can not only automate the formatting and static analysis steps, but we can also speed up the whole workflow by reducing the time a developer needs to focus on other tasks. A developer's job should be to focus on solving their problem in hand, not to fix the indentation level or inserting a line break.

This style guide aims to make every Javascript related code written by any VTEX developer seems to have been written by a single person. With this in mind feature implementations, mantainances and even reviews can be sped up, since everyone will be looking to code similar to theirs, while keeping a essential minimal code quality.

## Table of Contents

<!-- @import "[TOC]" {cmd="toc" depthFrom=3 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Types](#types)
  - [Types - primitives](#types-primitives)
  - [Types - complex](#types-complex)
- [References](#references)
  - [References - prefer-const](#references-prefer-const)
  - [References - disallow-var](#references-disallow-var)
  - [References - block-scope](#references-block-scope)
- [Objects](#objects)
  - [Objects - no-new](#objects-no-new)
  - [Objects - grouped-shorthand](#objects-grouped-shorthand)
  - [Objects - quoted-props](#objects-quoted-props)
  - [Objects - prototype-builtins](#objects-prototype-builtins)
  - [Objects - rest-spread](#objects-rest-spread)
- [Arrays](#arrays)
  - [Arrays - literals](#arrays-literals)
  - [Arrays - push](#arrays-push)
  - [Arrays - from-iterable](#arrays-from-iterable)
  - [Arrays - from-array-like](#arrays-from-array-like)
  - [Arrays - mapping](#arrays-mapping)
  - [Arrays - callback-return](#arrays-callback-return)
  - [Arrays - bracket-newline](#arrays-bracket-newline)
- [Destructuring](#destructuring)
  - [Destructuring - object](#destructuring-object)
  - [Destructuring - array](#destructuring-array)
  - [Destructuring - object-over-array](#destructuring-object-over-array)
- [Strings](#strings)
  - [Strings - quotes](#strings-quotes)
  - [Strings - line-length](#strings-line-length)
  - [Strings - eval](#strings-eval)
  - [Strings - escaping](#strings-escaping)
- [Functions](#functions)
  - [Functions - declarations](#functions-declarations)
  - [Functions - iife](#functions-iife)
  - [Functions - in-blocks](#functions-in-blocks)
  - [Functions - note-on-blocks](#functions-note-on-blocks)
  - [Functions - arguments-shadow](#functions-arguments-shadow)
  - [Functions - default-side-effects](#functions-default-side-effects)
  - [Functions - defaults-last](#functions-defaults-last)
  - [Functions - constructor](#functions-constructor)
  - [Functions - signature-spacing](#functions-signature-spacing)
  - [Functions - mutate-params](#functions-mutate-params)
  - [Functions - reassign-params](#functions-reassign-params)
  - [Functions - spread-vs-apply](#functions-spread-vs-apply)
  - [Functions - signature-invocation-indentation](#functions-signature-invocation-indentation)
- [Arrow Functions](#arrow-functions)
  - [Arrows - use-them](#arrows-use-them)
  - [Arrows - implicit-return](#arrows-implicit-return)
  - [Arrows - paren-wrap](#arrows-paren-wrap)
  - [Arrows - one-arg-parens](#arrows-one-arg-parens)
  - [Arrows - confusing](#arrows-confusing)
  - [Whitespace - implicit-arrow-linebreak](#whitespace-implicit-arrow-linebreak)
- [Classes & Constructors](#classes-constructors)
  - [Constructors - use-class](#constructors-use-class)
  - [Constructors - extends](#constructors-extends)
  - [Constructors - chaining](#constructors-chaining)
  - [Constructors - tostring](#constructors-tostring)
  - [Constructors - no-useless](#constructors-no-useless)
  - [Classes - no-duplicate-members](#classes-no-duplicate-members)
  - [Classes - methods-use-this](#classes-methods-use-this)
- [Modules](#modules)
  - [Modules - use-them](#modules-use-them)
  - [Modules - no-wildcard](#modules-no-wildcard)
  - [Modules - no-export-from-import](#modules-no-export-from-import)
  - [Modules - no-duplicate-imports](#modules-no-duplicate-imports)
  - [Modules - no-mutable-exports](#modules-no-mutable-exports)
  - [Modules - prefer-default-export](#modules-prefer-default-export)
  - [Modules - imports-first](#modules-imports-first)
  - [Modules - multiline-imports-over-newlines](#modules-multiline-imports-over-newlines)
  - [Modules - no-webpack-loader-syntax](#modules-no-webpack-loader-syntax)
- [Iterators and Generators](#iterators-and-generators)
  - [Iterators - nope](#iterators-nope)
  - [Generators - nope](#generators-nope)
  - [Generators - spacing](#generators-spacing)
- [e generators, or if you disregard [our advice](#Generators - nope](#e-generators-or-if-you-disregard-our-advicegenerators-nope)
- [Properties](#properties)
  - [Properties - dot](#properties-dot)
  - [Properties - bracket](#properties-bracket)
  - [es2016-Properties - exponentiation-operator](#es2016-properties-exponentiation-operator)
- [Variables](#variables)
  - [Variables - const](#variables-const)
  - [Variables - one-const](#variables-one-const)
  - [Variables - const-let-group](#variables-const-let-group)
  - [Variables - define-where-used](#variables-define-where-used)
  - [Variables - no-chain-assignment](#variables-no-chain-assignment)
  - [Variables - unary-increment-decrement](#variables-unary-increment-decrement)
  - [Variables - linebreak](#variables-linebreak)
  - [Variables - no-unused-vars](#variables-no-unused-vars)
- [Hoisting](#hoisting)
  - [Hoisting - about](#hoisting-about)
  - [Hoisting - anon-expressions](#hoisting-anon-expressions)
  - [Hoisting - named-expressions](#hoisting-named-expressions)
  - [Hoisting - declarations](#hoisting-declarations)
- [Comparison Operators & Equality](#comparison-operators-equality)
  - [Comparison - eqeqeq](#comparison-eqeqeq)
  - [Comparison - if](#comparison-if)
  - [Comparison - shortcuts](#comparison-shortcuts)
  - [Comparison - moreinfo](#comparison-moreinfo)
  - [Comparison - switch-blocks](#comparison-switch-blocks)
  - [Comparison - nested-ternaries](#comparison-nested-ternaries)
  - [Comparison - unneeded-ternary](#comparison-unneeded-ternary)
  - [Comparison - no-mixed-operators](#comparison-no-mixed-operators)
- [Blocks](#blocks)
  - [Blocks - braces](#blocks-braces)
  - [Blocks - cuddled-elses](#blocks-cuddled-elses)
  - [Blocks - no-else-return](#blocks-no-else-return)
- [Control Statements](#control-statements)
  - [control-Statements - value-selection](#control-statements-value-selection)
- [Comments](#comments)
  - [Comments - multiline](#comments-multiline)
  - [Comments - singleline](#comments-singleline)
  - [Comments - spaces](#comments-spaces)
  - [Comments - actionitems](#comments-actionitems)
  - [Comments - fixme](#comments-fixme)
  - [Comments - todo](#comments-todo)
- [Whitespace](#whitespace)
  - [Whitespace - spaces](#whitespace-spaces)
  - [Whitespace - before-blocks](#whitespace-before-blocks)
  - [Whitespace - around-keywords](#whitespace-around-keywords)
  - [Whitespace - infix-ops](#whitespace-infix-ops)
  - [Whitespace - newline-at-end](#whitespace-newline-at-end)
  - [Whitespace - chains](#whitespace-chains)
  - [Whitespace - after-blocks](#whitespace-after-blocks)
  - [Whitespace - padded-blocks](#whitespace-padded-blocks)
  - [Whitespace - no-multiple-blanks](#whitespace-no-multiple-blanks)
  - [Whitespace - in-brackets](#whitespace-in-brackets)
  - [Whitespace - in-braces](#whitespace-in-braces)
  - [Whitespace - max-len](#whitespace-max-len)
  - [Whitespace - block-spacing](#whitespace-block-spacing)
  - [Whitespace - comma-spacing](#whitespace-comma-spacing)
  - [Whitespace - computed-property-spacing](#whitespace-computed-property-spacing)
  - [Whitespace - func-call-spacing](#whitespace-func-call-spacing)
  - [Whitespace - key-spacing](#whitespace-key-spacing)
  - [Whitespace - no-trailing-spaces](#whitespace-no-trailing-spaces)
  - [Whitespace - no-multiple-empty-lines](#whitespace-no-multiple-empty-lines)
  - [Commas - dangling](#commas-dangling)
- [Semicolons](#semicolons)
  - [Semicolons - required](#semicolons-required)
- [Type Casting & Coercion](#type-casting-coercion)
  - [Coercion - explicit](#coercion-explicit)
  - [Coercion - strings](#coercion-strings)
  - [Coercion - numbers](#coercion-numbers)
  - [Coercion - comment-deviations](#coercion-comment-deviations)
  - [Coercion - bitwise](#coercion-bitwise)
  - [Coercion - booleans](#coercion-booleans)
- [Naming Conventions](#naming-conventions)
  - [Naming - descriptive](#naming-descriptive)
  - [Naming - camelCase](#naming-camelcase)
  - [Naming - PascalCase](#naming-pascalcase)
  - [Naming - leading-underscore](#naming-leading-underscore)
  - [Naming - self-this](#naming-self-this)
  - [Naming - filename-matches-export](#naming-filename-matches-export)
  - [Naming - camelCase-default-export](#naming-camelcase-default-export)
  - [Naming - PascalCase-singleton](#naming-pascalcase-singleton)
  - [Naming - Acronyms-and-Initialisms](#naming-acronyms-and-initialisms)
  - [Naming - uppercase](#naming-uppercase)
- [Accessors](#accessors)
  - [Accessors - not-required](#accessors-not-required)
  - [Accessors - no-getters-setters](#accessors-no-getters-setters)
  - [Accessors - boolean-prefix](#accessors-boolean-prefix)
  - [Accessors - consistent](#accessors-consistent)
- [Events](#events)
  - [Events - hash](#events-hash)
- [ECMAScript 5 Compatibility](#ecmascript-5-compatibility)
  - [es5-Compat - kangax](#es5-compat-kangax)
- [ECMAScript 6+ (ES 2015+) Styles](#ecmascript-6-es-2015-styles)
  - [Classes - constructors](#classes-constructors-1)
- [Standard Library](#standard-library)
  - [standard-Library - isnan](#standard-library-isnan)
  - [standard-Library - isfinite](#standard-library-isfinite)
- [Testing](#testing)
  - [Testing - yup](#testing-yup)
  - [Testing - for-real](#testing-for-real)
- [Performance](#performance)
- [Contributors](#contributors)

<!-- /code_chunk_output -->

### Types

#### Types - primitives

**Primitives**: When you access a primitive type you work directly on its value.

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`

```js
const foo = 1
let bar = foo

bar = 9

console.log(foo, bar) // => 1, 9
```

- Symbols cannot be faithfully polyfilled, so they should not be used when targeting browsers/environments that don’t support them natively.

#### Types - complex

**Complex**: When you access a complex type you work on a reference to its value.

- `object`
- `array`
- `function`

```js
const foo = [1, 2]
const bar = foo

bar[0] = 9

console.log(foo[0], bar[0]) // => 9, 9
```

**[⬆ back to top](#table-of-contents)**

### References

#### References - prefer-const

Use `const` for all of your references; avoid using `var`. eslint: [`prefer-const`](https://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign.html)

> Why? This ensures that you can’t reassign your references, which can lead to bugs and difficult to comprehend code.

```js
// bad
var a = 1
var b = 2

// good
const a = 1
const b = 2
```

#### References - disallow-var

If you must reassign references, use `let` instead of `var`. eslint: [`no-var`](https://eslint.org/docs/rules/no-var.html)

> Why? `let` is block-scoped rather than function-scoped like `var`.

```js
// bad
var count = 1
if (true) {
  count += 1
}

// good, use the let.
let count = 1
if (true) {
  count += 1
}
```

#### References - block-scope

Note that both `let` and `const` are block-scoped.

```js
// const and let only exist in the blocks they are defined in.
{
  let a = 1
  const b = 1
}
console.log(a) // ReferenceError
console.log(b) // ReferenceError
```

**[⬆ back to top](#table-of-contents)**

### Objects

#### Objects - no-new

Use the literal syntax for object creation. eslint: [`no-new-object`](https://eslint.org/docs/rules/no-new-object.html)

```js
// bad
const item = new Object()

// good
const item = {}
```

- [3.2](#es6-computed-properties) Use computed property names when creating objects with dynamic property names.

> Why? They allow you to define all the properties of an object in one place.

```js
function getKey(k) {
  return `a key named ${k}`
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco',
}
obj[getKey('enabled')] = true

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
}
```

- [3.3](#es6-object-shorthand) Use object method shorthand. eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

```js
// bad
const atom = {
  value: 1,

  addValue: function(value) {
    return atom.value + value
  },
}

// good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value
  },
}
```

- [3.4](#es6-object-concise) Use property value shorthand. eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

> Why? It is shorter and descriptive.

```js
const lukeSkywalker = 'Luke Skywalker'

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
}

// good
const obj = {
  lukeSkywalker,
}
```

#### Objects - grouped-shorthand

Group your shorthand properties at the beginning of your object declaration.

> Why? It’s easier to tell which properties are using the shorthand.

```js
const anakinSkywalker = 'Anakin Skywalker'
const lukeSkywalker = 'Luke Skywalker'

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
}

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
}
```

#### Objects - quoted-props

Only quote properties that are invalid identifiers. eslint: [`quote-props`](https://eslint.org/docs/rules/quote-props.html)

> Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

```js
// bad
const bad = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
}

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
}
```

#### Objects - prototype-builtins

Do not call `Object.prototype` methods directly, such as `hasOwnProperty`, `propertyIsEnumerable`, and `isPrototypeOf`. eslint: [`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)

> Why? These methods may be shadowed by properties on the object in question - consider `{ hasOwnProperty: false }` - or, the object may be a null object (`Object.create(null)`).

```js
// bad
console.log(object.hasOwnProperty(key))

// good
console.log(Object.prototype.hasOwnProperty.call(object, key))

// best
const has = Object.prototype.hasOwnProperty // cache the lookup once, in module scope.
console.log(has.call(object, key))
/* or */
import has from 'has' // https://www.npmjs.com/package/has
console.log(has(object, key))
```

#### Objects - rest-spread

Prefer the object spread operator over [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.

```js
// very bad
const original = { a: 1, b: 2 }
const copy = Object.assign(original, { c: 3 }) // this mutates `original` ಠ_ಠ
delete copy.a // so does this

// bad
const original = { a: 1, b: 2 }
const copy = Object.assign({}, original, { c: 3 }) // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 }
const copy = { ...original, c: 3 } // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy // noA => { b: 2, c: 3 }
```

**[⬆ back to top](#table-of-contents)**

### Arrays

#### Arrays - literals

Use the literal syntax for array creation. eslint: [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor.html)

```js
// bad
const items = new Array()

// good
const items = []
```

#### Arrays - push

Use [Array#push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) instead of direct assignment to add items to an array.

```js
const someStack = []

// bad
someStack[someStack.length] = 'abracadabra'

// good
someStack.push('abracadabra')
```

- [4.3](#es6-array-spreads) Use array spreads `...` to copy arrays.

```js
// bad
const len = items.length
const itemsCopy = []
let i

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i]
}

// good
const itemsCopy = [...items]
```

#### Arrays - from-iterable

To convert an iterable object to an array, use spreads `...` instead of [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

```js
const foo = document.querySelectorAll('.foo')

// good
const nodes = Array.from(foo)

// best
const nodes = [...foo]
```

#### Arrays - from-array-like

Use [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) for converting an array-like object to an array.

```js
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 }

// bad
const arr = Array.prototype.slice.call(arrLike)

// good
const arr = Array.from(arrLike)
```

#### Arrays - mapping

Use [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) instead of spread `...` for mapping over iterables, because it avoids creating an intermediate array.

```js
// bad
const baz = [...foo].map(bar)

// good
const baz = Array.from(foo, bar)
```

#### Arrays - callback-return

Use return statements in array method callbacks. It’s ok to omit the return if the function body consists of a single statement returning an expression ###, following [8.2](#Arrows - implicit-return

eslint: [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)

```js
// good
;[1, 2, 3].map(x => {
  const y = x + 1
  return x * y
})

// good
;[1, 2, 3].map(x => x + 1)

// bad - no returned value means `acc` becomes undefined after the first iteration
;[
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, item, index) => {
  const flatten = acc.concat(item)
})

// good
;[
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, item, index) => {
  const flatten = acc.concat(item)
  return flatten
})

// bad
inbox.filter(msg => {
  const { subject, author } = msg
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee'
  } else {
    return false
  }
})

// good
inbox.filter(msg => {
  const { subject, author } = msg
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee'
  }

  return false
})
```

#### Arrays - bracket-newline

Use line breaks after open and before close array brackets if an array has multiple lines

```js
// bad
const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
]

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
]

const numberInArray = [1, 2]

// good
const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
]

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
]

const numberInArray = [1, 2]
```

**[⬆ back to top](#table-of-contents)**

### Destructuring

#### Destructuring - object

Use object destructuring when accessing and using multiple properties of an object. eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

> Why? Destructuring saves you from creating temporary references for those properties.

```js
// bad
function getFullName(user) {
  const firstName = user.firstName
  const lastName = user.lastName

  return `${firstName} ${lastName}`
}

// good
function getFullName(user) {
  const { firstName, lastName } = user
  return `${firstName} ${lastName}`
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`
}
```

#### Destructuring - array

Use array destructuring. eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

```js
const arr = [1, 2, 3, 4]

// bad
const first = arr[0]
const second = arr[1]

// good
const [first, second] = arr
```

#### Destructuring - object-over-array

Use object destructuring for multiple return values, not array destructuring.

> Why? You can add new properties over time or change the order of things without breaking call sites.

```js
// bad
function processInput(input) {
  // then a miracle occurs
  return [left, right, top, bottom]
}

// the caller needs to think about the order of return data
const [left, __, top] = processInput(input)

// good
function processInput(input) {
  // then a miracle occurs
  return { left, right, top, bottom }
}

// the caller selects only the data they need
const { left, top } = processInput(input)
```

**[⬆ back to top](#table-of-contents)**

### Strings

#### Strings - quotes

Use single quotes `''` for strings. eslint: [`quotes`](https://eslint.org/docs/rules/quotes.html)

```js
// bad
const name = 'Capt. Janeway'

// bad - template literals should contain interpolation or newlines
const name = `Capt. Janeway`

// good
const name = 'Capt. Janeway'
```

#### Strings - line-length

Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.

> Why? Broken strings are painful to work with and make code less searchable.

```js
// bad
const errorMessage =
  'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.'

// bad
const errorMessage =
  'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.'

// good
const errorMessage =
  'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.'
```

- [6.3](#es6-template-literals) When programmatically building up strings, use template strings instead of concatenation. eslint: [`prefer-template`](https://eslint.org/docs/rules/prefer-template.html) [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)

> Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

```js
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?'
}

// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join()
}

// bad
function sayHi(name) {
  return `How are you, ${name}?`
}

// good
function sayHi(name) {
  return `How are you, ${name}?`
}
```

#### Strings - eval

Never use `eval()` on a string, it opens too many vulnerabilities. eslint: [`no-eval`](https://eslint.org/docs/rules/no-eval)

#### Strings - escaping

Do not unnecessarily escape characters in strings. eslint: [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)

> Why? Backslashes harm readability, thus they should only be present when necessary.

```js
// bad
const foo = '\'this\' is "quoted"'

// good
const foo = '\'this\' is "quoted"'
const foo = `my name is '${name}'`
```

**[⬆ back to top](#table-of-contents)**

### Functions

#### Functions - declarations

Use named function expressions instead of function declarations. eslint: [`func-style`](https://eslint.org/docs/rules/func-style)

> Why? Function declarations are hoisted, which means that it’s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module! Don’t forget to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable (which is often the case in modern browsers or when using compilers such as Babel). This eliminates any assumptions made about the Error’s call stack. ([Discussion](https://github.com/airbnb/javascript/issues/794))

```js
// bad
function foo() {
  // ...
}

// bad
const foo = function() {
  // ...
}

// good
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
}
```

#### Functions - iife

Wrap immediately invoked function expressions in parentheses. eslint: [`wrap-iife`](https://eslint.org/docs/rules/wrap-iife.html)

> Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, you almost never need an IIFE.

```js
// immediately-invoked function expression (IIFE)
;(function() {
  console.log('Welcome to the Internet. Please follow me.')
})()
```

#### Functions - in-blocks

Never declare a function in a non-function block (`if`, `while`, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears. eslint: [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func.html)

#### Functions - note-on-blocks

**Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement.

```js
// bad
if (currentUser) {
  function test() {
    console.log('Nope.')
  }
}

// good
let test
if (currentUser) {
  test = () => {
    console.log('Yup.')
  }
}
```

#### Functions - arguments-shadow

Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.

```js
// bad
function foo(name, options, arguments) {
  // ...
}

// good
function foo(name, options, args) {
  // ...
}
```

- [7.6](#es6-rest) Never use `arguments`, opt to use rest syntax `...` instead. eslint: [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)

> Why? `...` is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like `arguments`.

```js
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments)
  return args.join('')
}

// good
function concatenateAll(...args) {
  return args.join('')
}
```

- [7.7](#es6-default-parameters) Use default parameter syntax rather than mutating function arguments.

```js
// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {}
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {}
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```

#### Functions - default-side-effects

Avoid side effects with default parameters.

> Why? They are confusing to reason about.

```js
var b = 1
// bad
function count(a = b++) {
  console.log(a)
}
count() // 1
count() // 2
count(3) // 3
count() // 3
```

#### Functions - defaults-last

Always put default parameters last.

```js
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
```

#### Functions - constructor

Never use the Function constructor to create a new function. eslint: [`no-new-func`](https://eslint.org/docs/rules/no-new-func)

> Why? Creating a function in this way evaluates a string similarly to `eval()`, which opens vulnerabilities.

```js
// bad
var add = new Function('a', 'b', 'return a + b')

// still bad
var subtract = Function('a', 'b', 'return a - b')
```

#### Functions - signature-spacing

Spacing in a function signature. eslint: [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren) [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)

> Why? Consistency is good, and you shouldn’t have to add or remove a space when adding or removing a name.

```js
// bad
const f = function() {}
const g = function() {}
const h = function() {}

// good
const x = function() {}
const y = function a() {}
```

#### Functions - mutate-params

Never mutate parameters. eslint: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

> Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

```js
// bad
function f1(obj) {
  obj.key = 1
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1
}
```

#### Functions - reassign-params

Never reassign parameters. eslint: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

> Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in V8.

```js
// bad
function f1(a) {
  a = 1
  // ...
}

function f2(a) {
  if (!a) {
    a = 1
  }
  // ...
}

// good
function f3(a) {
  const b = a || 1
  // ...
}

function f4(a = 1) {
  // ...
}
```

#### Functions - spread-vs-apply

Prefer the use of the spread operator `...` to call variadic functions. eslint: [`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)

> Why? It’s cleaner, you don’t need to supply a context, and you can not easily compose `new` with `apply`.

```js
// bad
const x = [1, 2, 3, 4, 5]
console.log.apply(console, x)

// good
const x = [1, 2, 3, 4, 5]
console.log(...x)

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]))()

// good
new Date(...[2016, 8, 5])
```

#### Functions - signature-invocation-indentation

Functions with multiline signatures, or invocations, should be indented just like every other multiline list in this guide: with each item on a line by itself, with a trailing comma on the last item. eslint: [`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)

```js
// bad
function foo(bar, baz, quux) {
  // ...
}

// good
function foo(bar, baz, quux) {
  // ...
}

// bad
console.log(foo, bar, baz)

// good
console.log(foo, bar, baz)
```

**[⬆ back to top](#table-of-contents)**

### Arrow Functions

#### Arrows - use-them

When you must use an anonymous function (as when passing an inline callback), use arrow function notation. eslint: [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback.html), [`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing.html)

> Why? It creates a version of the function that executes in the context of `this`, which is usually what you want, and is a more concise syntax.

> Why not? If you have a fairly complicated function, you might move that logic out into its own named function expression.

```js
// bad
;[1, 2, 3].map(function(x) {
  const y = x + 1
  return x * y
})

// good
;[1, 2, 3].map(x => {
  const y = x + 1
  return x * y
})
```

#### Arrows - implicit-return

If the function body consists of a single statement returning an [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) without side effects, omit the braces and use the implicit return. Otherwise, keep the braces and use a `return` statement. eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html), [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style.html)

> Why? Syntactic sugar. It reads well when multiple functions are chained together.

```js
// bad
;[1, 2, 3].map(number => {
  const nextNumber = number + 1
  ;`A string containing the ${nextNumber}.`
})

// good
;[1, 2, 3].map(number => `A string containing the ${number + 1}.`)

// good
;[1, 2, 3].map(number => {
  const nextNumber = number + 1
  return `A string containing the ${nextNumber}.`
})

// good
;[1, 2, 3].map((number, index) => ({
  [index]: number,
}))

// No implicit return with side effects
function foo(callback) {
  const val = callback()
  if (val === true) {
    // Do something if callback returns true
  }
}

let bool = false

// bad
foo(() => (bool = true))

// good
foo(() => {
  bool = true
})
```

#### Arrows - paren-wrap

In case the expression spans over multiple lines, wrap it in parentheses for better readability.

> Why? It shows clearly where the function starts and ends.

```js
// bad
;['get', 'post', 'put'].map(httpMethod =>
  Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod
  )
)

// good
;['get', 'post', 'put'].map(httpMethod =>
  Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod
  )
)
```

#### Arrows - one-arg-parens

Always include parentheses around arguments for clarity and consistency. eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html)

> Why? Minimizes diff churn when adding or removing arguments.

```js
// bad
;[1, 2, 3].map(x => x * x)

// good
;[1, 2, 3].map(x => x * x)

// bad
;[1, 2, 3].map(
  number =>
    `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
)

// good
;[1, 2, 3].map(
  number =>
    `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
)

// bad
;[1, 2, 3].map(x => {
  const y = x + 1
  return x * y
})

// good
;[1, 2, 3].map(x => {
  const y = x + 1
  return x * y
})
```

#### Arrows - confusing

Avoid confusing arrow function syntax (`=>`) with comparison operators (`<=`, `>=`). eslint: [`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)

```js
// bad
const itemHeight = item =>
  item.height <= 256 ? item.largeSize : item.smallSize

// bad
const itemHeight = item =>
  item.height >= 256 ? item.largeSize : item.smallSize

// good
const itemHeight = item =>
  item.height <= 256 ? item.largeSize : item.smallSize

// good
const itemHeight = item => {
  const { height, largeSize, smallSize } = item
  return height <= 256 ? largeSize : smallSize
}
```

#### Whitespace - implicit-arrow-linebreak

Enforce the location of arrow function bodies with implicit returns. eslint: [`implicit-arrow-linebreak`](https://eslint.org/docs/rules/implicit-arrow-linebreak)

```js
// bad
foo => bar

foo => bar

// good
foo => bar
foo => bar
foo => bar
```

**[⬆ back to top](#table-of-contents)**

### Classes & Constructors

#### Constructors - use-class

Always use `class`. Avoid manipulating `prototype` directly.

> Why? `class` syntax is more concise and easier to reason about.

```js
// bad
function Queue(contents = []) {
  this.queue = [...contents]
}
Queue.prototype.pop = function() {
  const value = this.queue[0]
  this.queue.splice(0, 1)
  return value
}

// good
class Queue {
  constructor(contents = []) {
    this.queue = [...contents]
  }
  pop() {
    const value = this.queue[0]
    this.queue.splice(0, 1)
    return value
  }
}
```

#### Constructors - extends

Use `extends` for inheritance.

> Why? It is a built-in way to inherit prototype functionality without breaking `instanceof`.

```js
// bad
const inherits = require('inherits')
function PeekableQueue(contents) {
  Queue.apply(this, contents)
}
inherits(PeekableQueue, Queue)
PeekableQueue.prototype.peek = function() {
  return this.queue[0]
}

// good
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0]
  }
}
```

#### Constructors - chaining

Methods can return `this` to help with method chaining.

```js
// bad
Jedi.prototype.jump = function() {
  this.jumping = true
  return true
}

Jedi.prototype.setHeight = function(height) {
  this.height = height
}

const luke = new Jedi()
luke.jump() // => true
luke.setHeight(20) // => undefined

// good
class Jedi {
  jump() {
    this.jumping = true
    return this
  }

  setHeight(height) {
    this.height = height
    return this
  }
}

const luke = new Jedi()

luke.jump().setHeight(20)
```

#### Constructors - tostring

It’s okay to write a custom `toString()` method, just make sure it works successfully and causes no side effects.

```js
class Jedi {
  constructor(options = {}) {
    this.name = options.name || 'no name'
  }

  getName() {
    return this.name
  }

  toString() {
    return `Jedi - ${this.getName()}`
  }
}
```

#### Constructors - no-useless

Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary. eslint: [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)

```js
// bad
class Jedi {
  constructor() {}

  getName() {
    return this.name
  }
}

// bad
class Rey extends Jedi {
  constructor(...args) {
    super(...args)
  }
}

// good
class Rey extends Jedi {
  constructor(...args) {
    super(...args)
    this.name = 'Rey'
  }
}
```

#### Classes - no-duplicate-members

Avoid duplicate class members. eslint: [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)

> Why? Duplicate class member declarations will silently prefer the last one - having duplicates is almost certainly a bug.

```js
// bad
class Foo {
  bar() {
    return 1
  }
  bar() {
    return 2
  }
}

// good
class Foo {
  bar() {
    return 1
  }
}

// good
class Foo {
  bar() {
    return 2
  }
}
```

#### Classes - methods-use-this

Class methods should use `this` or be made into a static method unless an external library or framework requires to use specific non-static methods. Being an instance method should indicate that it behaves differently based on properties of the receiver. eslint: [`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)

```js
// bad
class Foo {
  bar() {
    console.log('bar')
  }
}

// good - this is used
class Foo {
  bar() {
    console.log(this.bar)
  }
}

// good - constructor is exempt
class Foo {
  constructor() {
    // ...
  }
}

// good - static methods aren't expected to use this
class Foo {
  static bar() {
    console.log('bar')
  }
}
```

**[⬆ back to top](#table-of-contents)**

### Modules

#### Modules - use-them

Always use modules (`import`/`export`) over a non-standard module system. You can always transpile to your preferred module system.

> Why? Modules are the future, let’s start using the future now.

```js
// bad
const AirbnbStyleGuide = require('./AirbnbStyleGuide')
module.exports = AirbnbStyleGuide.es6

// ok
import AirbnbStyleGuide from './AirbnbStyleGuide'
export default AirbnbStyleGuide.es6

// best
import { es6 } from './AirbnbStyleGuide'
export default es6
```

#### Modules - no-wildcard

Do not use wildcard imports.

> Why? This makes sure you have a single default export.

```js
// bad
import * as AirbnbStyleGuide from './AirbnbStyleGuide'

// good
import AirbnbStyleGuide from './AirbnbStyleGuide'
```

#### Modules - no-export-from-import

And do not export directly from an import.

> Why? Although the one-liner is concise, having one clear way to import and one clear way to export makes things consistent.

```js
// bad
// filename es6.js
export { es6 as default } from './AirbnbStyleGuide'

// good
// filename es6.js
import { es6 } from './AirbnbStyleGuide'
export default es6
```

#### Modules - no-duplicate-imports

Only import from a path in one place.
eslint: [`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports)

> Why? Having multiple lines that import from the same path can make code harder to maintain.

```js
// bad
import foo from 'foo'
// … some other imports … //
import { named1, named2 } from 'foo'

// good
import foo, { named1, named2 } from 'foo'

// good
import foo, { named1, named2 } from 'foo'
```

#### Modules - no-mutable-exports

Do not export mutable bindings.
eslint: [`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

> Why? Mutation should be avoided in general, but in particular when exporting mutable bindings. While this technique may be needed for some special cases, in general, only constant references should be exported.

```js
// bad
let foo = 3
export { foo }

// good
const foo = 3
export { foo }
```

#### Modules - prefer-default-export

In modules with a single export, prefer default export over named export.
eslint: [`import/prefer-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)

> Why? To encourage more files that only ever export one thing, which is better for readability and maintainability.

```js
// bad
export function foo() {}

// good
export default function foo() {}
```

#### Modules - imports-first

Put all `import`s above non-import statements.
eslint: [`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

> Why? Since `import`s are hoisted, keeping them all at the top prevents surprising behavior.

```js
// bad
import foo from 'foo'
foo.init()

import bar from 'bar'

// good
import foo from 'foo'
import bar from 'bar'

foo.init()
```

#### Modules - multiline-imports-over-newlines

Multiline imports should be indented just like multiline array and object literals.

> Why? The curly braces follow the same indentation rules as every other curly brace block in the style guide, as do the trailing commas.

```js
// bad
import { longNameA, longNameB, longNameC, longNameD, longNameE } from 'path'

// good
import { longNameA, longNameB, longNameC, longNameD, longNameE } from 'path'
```

#### Modules - no-webpack-loader-syntax

Disallow Webpack loader syntax in module import statements.
eslint: [`import/no-webpack-loader-syntax`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)

> Why? Since using Webpack syntax in the imports couples the code to a module bundler. Prefer using the loader syntax in `webpack.config.js`.

```js
// bad
import fooSass from 'css!sass!foo.scss'
import barCss from 'style!css!bar.css'

// good
import fooSass from 'foo.scss'
import barCss from 'bar.css'
```

**[⬆ back to top](#table-of-contents)**

### Iterators and Generators

#### Iterators - nope

Don’t use iterators. Prefer JavaScript’s higher-order functions instead of loops like `for-in` or `for-of`. eslint: [`no-iterator`](https://eslint.org/docs/rules/no-iterator.html) [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)

> Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.

> Use `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` / ... to iterate over arrays, and `Object.keys()` / `Object.values()` / `Object.entries()` to produce arrays so you can iterate over objects.

```js
const numbers = [1, 2, 3, 4, 5]

// bad
let sum = 0
for (let num of numbers) {
  sum += num
}
sum === 15

// good
let sum = 0
numbers.forEach(num => {
  sum += num
})
sum === 15

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0)
sum === 15

// bad
const increasedByOne = []
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1)
}

// good
const increasedByOne = []
numbers.forEach(num => {
  increasedByOne.push(num + 1)
})

// best (keeping it functional)
const increasedByOne = numbers.map(num => num + 1)
```

#### Generators - nope

Don’t use generators for now.

> Why? They don’t transpile well to ES5.

#### Generators - spacing

###e generators, or if you disregard [our advice](#Generators - nope

make sure their function signature is spaced properly. eslint: [`generator-star-spacing`](https://eslint.org/docs/rules/generator-star-spacing)

> Why? `function` and `*` are part of the same conceptual keyword - `*` is not a modifier for `function`, `function*` is a unique construct, different from `function`.

```js
// bad
function* foo() {
  // ...
}

// bad
const bar = function*() {
  // ...
}

// bad
const baz = function*() {
  // ...
}

// bad
const quux = function*() {
  // ...
}

// bad
function* foo() {
  // ...
}

// bad
function* foo() {
  // ...
}

// very bad
function* foo() {
  // ...
}

// very bad
const wat = function*() {
  // ...
}

// good
function* foo() {
  // ...
}

// good
const foo = function*() {
  // ...
}
```

**[⬆ back to top](#table-of-contents)**

### Properties

#### Properties - dot

Use dot notation when accessing properties. eslint: [`dot-notation`](https://eslint.org/docs/rules/dot-notation.html)

```js
const luke = {
  jedi: true,
  age: 28,
}

// bad
const isJedi = luke['jedi']

// good
const isJedi = luke.jedi
```

#### Properties - bracket

Use bracket notation `[]` when accessing properties with a variable.

```js
const luke = {
  jedi: true,
  age: 28,
}

function getProp(prop) {
  return luke[prop]
}

const isJedi = getProp('jedi')
```

#### es2016-Properties - exponentiation-operator

Use exponentiation operator `**` when calculating exponentiations. eslint: [`no-restricted-properties`](https://eslint.org/docs/rules/no-restricted-properties).

```js
// bad
const binary = Math.pow(2, 10)

// good
const binary = 2 ** 10
```

**[⬆ back to top](#table-of-contents)**

### Variables

#### Variables - const

Always use `const` or `let` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that. eslint: [`no-undef`](https://eslint.org/docs/rules/no-undef) [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

```js
// bad
superPower = new SuperPower()

// good
const superPower = new SuperPower()
```

#### Variables - one-const

Use one `const` or `let` declaration per variable or assignment. eslint: [`one-var`](https://eslint.org/docs/rules/one-var.html)

> Why? It’s easier to add new variable declarations this way, and you never have to worry about swapping out a `;` for a `,` or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once.

```js
// bad
const items = getItems(),
  goSportsTeam = true,
  dragonball = 'z'

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
  goSportsTeam = true
dragonball = 'z'

// good
const items = getItems()
const goSportsTeam = true
const dragonball = 'z'
```

#### Variables - const-let-group

Group all your `const`s and then group all your `let`s.

> Why? This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

```js
// bad
let i,
  len,
  dragonball,
  items = getItems(),
  goSportsTeam = true

// bad
let i
const items = getItems()
let dragonball
const goSportsTeam = true
let len

// good
const goSportsTeam = true
const items = getItems()
let dragonball
let i
let length
```

#### Variables - define-where-used

Assign variables where you need them, but place them in a reasonable place.

> Why? `let` and `const` are block scoped and not function scoped.

```js
// bad - unnecessary function call
function checkName(hasName) {
  const name = getName()

  if (hasName === 'test') {
    return false
  }

  if (name === 'test') {
    this.setName('')
    return false
  }

  return name
}

// good
function checkName(hasName) {
  if (hasName === 'test') {
    return false
  }

  const name = getName()

  if (name === 'test') {
    this.setName('')
    return false
  }

  return name
}
```

#### Variables - no-chain-assignment

Don’t chain variable assignments. eslint: [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)

> Why? Chaining variable assignments creates implicit global variables.

```js
// bad
;(function example() {
  // JavaScript interprets this as
  // let a = ( b = ( c = 1 ) );
  // The let keyword only applies to variable a; variables b and c become
  // global variables.
  let a = (b = c = 1)
})()

console.log(a) // throws ReferenceError
console.log(b) // 1
console.log(c) // 1

// good
;(function example() {
  let a = 1
  let b = a
  let c = a
})()

console.log(a) // throws ReferenceError
console.log(b) // throws ReferenceError
console.log(c) // throws ReferenceError

// the same applies for `const`
```

#### Variables - unary-increment-decrement

Avoid using unary increments and decrements (`++`, `--`). eslint [`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)

> Why? Per the eslint documentation, unary increment and decrement statements are subject to automatic semicolon insertion and can cause silent errors with incrementing or decrementing values within an application. It is also more expressive to mutate your values with statements like `num += 1` instead of `num++` or `num ++`. Disallowing unary increment and decrement statements also prevents you from pre-incrementing/pre-decrementing values unintentionally which can also cause unexpected behavior in your programs.

```js
// bad

const array = [1, 2, 3]
let num = 1
num++
--num

let sum = 0
let truthyCount = 0
for (let i = 0; i < array.length; i++) {
  let value = array[i]
  sum += value
  if (value) {
    truthyCount++
  }
}

// good

const array = [1, 2, 3]
let num = 1
num += 1
num -= 1

const sum = array.reduce((a, b) => a + b, 0)
const truthyCount = array.filter(Boolean).length
```

#### Variables - linebreak

Avoid linebreaks before or after `=` in an assignment. If your assignment violates [`max-len`](https://eslint.org/docs/rules/max-len.html), surround the value in parens. eslint [`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak.html).

> Why? Linebreaks surrounding `=` can obfuscate the value of an assignment.

```js
// bad
const foo = superLongLongLongLongLongLongLongLongFunctionName()

// bad
const foo = 'superLongLongLongLongLongLongLongLongString'

// good
const foo = superLongLongLongLongLongLongLongLongFunctionName()

// good
const foo = 'superLongLongLongLongLongLongLongLongString'
```

#### Variables - no-unused-vars

Disallow unused variables. eslint: [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)

> Why? Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.

```js
// bad

var some_unused_var = 42

// Write-only variables are not considered as used.
var y = 10
y = 5

// A read for a modification of itself is not considered as used.
var z = 0
z = z + 1

// Unused function arguments.
function getX(x, y) {
  return x
}

// good

function getXPlusY(x, y) {
  return x + y
}

var x = 1
var y = a + 2

alert(getXPlusY(x, y))

// 'type' is ignored even if unused because it has a rest property sibling.
// This is a form of extracting an object that omits the specified keys.
var { type, ...coords } = data
// 'coords' is now the 'data' object without its 'type' property.
```

**[⬆ back to top](#table-of-contents)**

### Hoisting

#### Hoisting - about

`var` declarations get hoisted to the top of their closest enclosing function scope, their assignment does not. `const` and `let` declarations are blessed with a new concept called [Temporal Dead Zones (TDZ)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone). It’s important to know why [typeof is no longer safe](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15).

```js
// we know this wouldn’t work (assuming there
// is no notDefined global variable)
function example() {
  console.log(notDefined) // => throws a ReferenceError
}

// creating a variable declaration after you
// reference the variable will work due to
// variable hoisting. Note: the assignment
// value of `true` is not hoisted.
function example() {
  console.log(declaredButNotAssigned) // => undefined
  var declaredButNotAssigned = true
}

// the interpreter is hoisting the variable
// declaration to the top of the scope,
// which means our example could be rewritten as:
function example() {
  let declaredButNotAssigned
  console.log(declaredButNotAssigned) // => undefined
  declaredButNotAssigned = true
}

// using const and let
function example() {
  console.log(declaredButNotAssigned) // => throws a ReferenceError
  console.log(typeof declaredButNotAssigned) // => throws a ReferenceError
  const declaredButNotAssigned = true
}
```

#### Hoisting - anon-expressions

Anonymous function expressions hoist their variable name, but not the function assignment.

```js
function example() {
  console.log(anonymous) // => undefined

  anonymous() // => TypeError anonymous is not a function

  var anonymous = function() {
    console.log('anonymous function expression')
  }
}
```

#### Hoisting - named-expressions

Named function expressions hoist the variable name, not the function name or the function body.

```js
function example() {
  console.log(named) // => undefined

  named() // => TypeError named is not a function

  superPower() // => ReferenceError superPower is not defined

  var named = function superPower() {
    console.log('Flying')
  }
}

// the same is true when the function name
// is the same as the variable name.
function example() {
  console.log(named) // => undefined

  named() // => TypeError named is not a function

  var named = function named() {
    console.log('named')
  }
}
```

#### Hoisting - declarations

Function declarations hoist their name and the function body.

```js
function example() {
  superPower() // => Flying

  function superPower() {
    console.log('Flying')
  }
}
```

- For more information refer to [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting/) by [Ben Cherry](http://www.adequatelygood.com/).

**[⬆ back to top](#table-of-contents)**

### Comparison Operators & Equality

#### Comparison - eqeqeq

Use `===` and `!==` over `==` and `!=`. eslint: [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq.html)

#### Comparison - if

Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:

- **Objects** evaluate to **true**
- **Undefined** evaluates to **false**
- **Null** evaluates to **false**
- **Booleans** evaluate to **the value of the boolean**
- **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**
- **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

```js
if ([0] && []) {
  // true
  // an array (even an empty one) is an object, objects will evaluate to true
}
```

#### Comparison - shortcuts

Use shortcuts for booleans, but explicit comparisons for strings and numbers.

```js
// bad
if (isValid === true) {
  // ...
}

// good
if (isValid) {
  // ...
}

// bad
if (name) {
  // ...
}

// good
if (name !== '') {
  // ...
}

// bad
if (collection.length) {
  // ...
}

// good
if (collection.length > 0) {
  // ...
}
```

#### Comparison - moreinfo

For more information see [Truth Equality and JavaScript](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll.

#### Comparison - switch-blocks

Use braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`). eslint: [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations.html)

> Why? Lexical declarations are visible in the entire `switch` block but only get initialized when assigned, which only happens when its `case` is reached. This causes problems when multiple `case` clauses attempt to define the same thing.

```js
// bad
switch (foo) {
  case 1:
    let x = 1
    break
  case 2:
    const y = 2
    break
  case 3:
    function f() {
      // ...
    }
    break
  default:
    class C {}
}

// good
switch (foo) {
  case 1: {
    let x = 1
    break
  }
  case 2: {
    const y = 2
    break
  }
  case 3: {
    function f() {
      // ...
    }
    break
  }
  case 4:
    bar()
    break
  default: {
    class C {}
  }
}
```

#### Comparison - nested-ternaries

Ternaries should not be nested and generally be single line expressions. eslint: [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary.html)

```js
// bad
const foo = maybe1 > maybe2 ? 'bar' : value1 > value2 ? 'baz' : null

// split into 2 separated ternary expressions
const maybeNull = value1 > value2 ? 'baz' : null

// better
const foo = maybe1 > maybe2 ? 'bar' : maybeNull

// best
const foo = maybe1 > maybe2 ? 'bar' : maybeNull
```

#### Comparison - unneeded-ternary

Avoid unneeded ternary statements. eslint: [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary.html)

```js
// bad
const foo = a ? a : b
const bar = c ? true : false
const baz = c ? false : true

// good
const foo = a || b
const bar = !!c
const baz = !c
```

#### Comparison - no-mixed-operators

When mixing operators, enclose them in parentheses. The only exception is the standard arithmetic operators: `+`, `-`, and `**` since their precedence is broadly understood. We recommend enclosing `/` and `*` in parentheses because their precedence can be ambiguous when they are mixed.
eslint: [`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators.html)

> Why? This improves readability and clarifies the developer’s intention.

```js
// bad
const foo = (a && b < 0) || c > 0 || d + 1 === 0

// bad
const bar = a ** b - (5 % d)

// bad
// one may be confused into thinking (a || b) && c
if (a || (b && c)) {
  return d
}

// bad
const bar = a + (b / c) * d

// good
const foo = (a && b < 0) || c > 0 || d + 1 === 0

// good
const bar = a ** b - (5 % d)

// good
if (a || (b && c)) {
  return d
}

// good
const bar = a + (b / c) * d
```

**[⬆ back to top](#table-of-contents)**

### Blocks

#### Blocks - braces

Use braces with all multiline blocks. eslint: [`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position)

```js
// bad
if (test) return false

// good
if (test) return false

// good
if (test) {
  return false
}

// bad
function foo() {
  return false
}

// good
function bar() {
  return false
}
```

#### Blocks - cuddled-elses

If you’re using multiline blocks with `if` and `else`, put `else` on the same line as your `if` block’s closing brace. eslint: [`brace-style`](https://eslint.org/docs/rules/brace-style.html)

```js
// bad
if (test) {
  thing1()
  thing2()
} else {
  thing3()
}

// good
if (test) {
  thing1()
  thing2()
} else {
  thing3()
}
```

#### Blocks - no-else-return

If an `if` block always executes a `return` statement, the subsequent `else` block is unnecessary. A `return` in an `else if` block following an `if` block that contains a `return` can be separated into multiple `if` blocks. eslint: [`no-else-return`](https://eslint.org/docs/rules/no-else-return)

```js
// bad
function foo() {
  if (x) {
    return x
  } else {
    return y
  }
}

// bad
function cats() {
  if (x) {
    return x
  } else if (y) {
    return y
  }
}

// bad
function dogs() {
  if (x) {
    return x
  } else {
    if (y) {
      return y
    }
  }
}

// good
function foo() {
  if (x) {
    return x
  }

  return y
}

// good
function cats() {
  if (x) {
    return x
  }

  if (y) {
    return y
  }
}

// good
function dogs(x) {
  if (x) {
    if (z) {
      return y
    }
  } else {
    return z
  }
}
```

**[⬆ back to top](#table-of-contents)**

### Control Statements

- [17.1](#control-statements) In case your control statement (`if`, `while` etc.) gets too long or exceeds the maximum line length, each (grouped) condition could be put into a new line. The logical operator should begin the line.

> Why? Requiring operators at the beginning of the line keeps the operators aligned and follows a pattern similar to method chaining. This also improves readability by making it easier to visually follow complex logic.

```js
// bad
if (
  (foo === 123 || bar === 'abc') &&
  doesItLookGoodWhenItBecomesThatLong() &&
  isThisReallyHappening()
) {
  thing1()
}

// bad
if (foo === 123 && bar === 'abc') {
  thing1()
}

// bad
if (foo === 123 && bar === 'abc') {
  thing1()
}

// bad
if (foo === 123 && bar === 'abc') {
  thing1()
}

// good
if (foo === 123 && bar === 'abc') {
  thing1()
}

// good
if (
  (foo === 123 || bar === 'abc') &&
  doesItLookGoodWhenItBecomesThatLong() &&
  isThisReallyHappening()
) {
  thing1()
}

// good
if (foo === 123 && bar === 'abc') {
  thing1()
}
```

#### control-Statements - value-selection

Don't use selection operators in place of control statements.

```js
// bad
!isRunning && startRunning()

// good
if (!isRunning) {
  startRunning()
}
```

**[⬆ back to top](#table-of-contents)**

### Comments

#### Comments - multiline

Use `/** ... */` for multiline comments.

```js
// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {
  // ...

  return element
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {
  // ...

  return element
}
```

#### Comments - singleline

Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block.

```js
// bad
const active = true // is current tab

// good
// is current tab
const active = true

// bad
function getType() {
  console.log('fetching type...')
  // set the default type to 'no type'
  const type = this.type || 'no type'

  return type
}

// good
function getType() {
  console.log('fetching type...')

  // set the default type to 'no type'
  const type = this.type || 'no type'

  return type
}

// also good
function getType() {
  // set the default type to 'no type'
  const type = this.type || 'no type'

  return type
}
```

#### Comments - spaces

Start all comments with a space to make it easier to read. eslint: [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)

```js
// bad
//is current tab
const active = true

// good
// is current tab
const active = true

// bad
/**
 *make() returns a new element
 *based on the passed-in tag name
 */
function make(tag) {
  // ...

  return element
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {
  // ...

  return element
}
```

#### Comments - actionitems

Prefixing your comments with `FIXME` or `TODO` helps other developers quickly understand if you’re pointing out a problem that needs to be revisited, or if you’re suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are `FIXME: -- need to figure this out` or `TODO: -- need to implement`.

#### Comments - fixme

Use `// FIXME:` to annotate problems.

```js
class Calculator extends Abacus {
  constructor() {
    super()

    // FIXME: shouldn’t use a global here
    total = 0
  }
}
```

#### Comments - todo

Use `// TODO:` to annotate solutions to problems.

```js
class Calculator extends Abacus {
  constructor() {
    super()

    // TODO: total should be configurable by an options param
    this.total = 0
  }
}
```

**[⬆ back to top](#table-of-contents)**

### Whitespace

#### Whitespace - spaces

Use soft tabs (space character) set to 2 spaces. eslint: [`indent`](https://eslint.org/docs/rules/indent.html)

```js
// bad
function foo() {
∙∙∙∙let name;
}

// bad
function bar() {
∙let name;
}

// good
function baz() {
∙∙let name;
}
```

#### Whitespace - before-blocks

Place 1 space before the leading brace. eslint: [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks.html)

```js
// bad
function test() {
  console.log('test')
}

// good
function test() {
  console.log('test')
}

// bad
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
})

// good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
})
```

#### Whitespace - around-keywords

Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations. eslint: [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing.html)

```js
// bad
if (isJedi) {
  fight()
}

// good
if (isJedi) {
  fight()
}

// bad
function fight() {
  console.log('Swooosh!')
}

// good
function fight() {
  console.log('Swooosh!')
}
```

#### Whitespace - infix-ops

Set off operators with spaces. eslint: [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops.html)

```js
// bad
const x = y + 5

// good
const x = y + 5
```

#### Whitespace - newline-at-end

End files with a single newline character. eslint: [`eol-last`](https://github.com/eslint/eslint/blob/master/docs/rules/eol-last.md)

```js
// bad
import { es6 } from './AirbnbStyleGuide'
// ...
export default es6
```

```js
// bad
import { es6 } from './AirbnbStyleGuide';
// ...
export default es6;↵
↵
```

```js
// good
import { es6 } from './AirbnbStyleGuide';
// ...
export default es6;↵
```

#### Whitespace - chains

Use indentation when making long method chains (more than 2 method chains). Use a leading dot, which
emphasizes that the line is a method call, not a new statement. eslint: [`newline-per-chained-call`](https://eslint.org/docs/rules/newline-per-chained-call) [`no-whitespace-before-property`](https://eslint.org/docs/rules/no-whitespace-before-property)

```js
// bad
$('#items')
  .find('.selected')
  .highlight()
  .end()
  .find('.open')
  .updateCount()

// bad
$('#items')
  .find('.selected')
  .highlight()
  .end()
  .find('.open')
  .updateCount()

// good
$('#items')
  .find('.selected')
  .highlight()
  .end()
  .find('.open')
  .updateCount()

// bad
const leds = stage
  .selectAll('.led')
  .data(data)
  .enter()
  .append('svg:svg')
  .classed('led', true)
  .attr('width', (radius + margin) * 2)
  .append('svg:g')
  .attr('transform', `translate(${radius + margin},${radius + margin})`)
  .call(tron.led)

// good
const leds = stage
  .selectAll('.led')
  .data(data)
  .enter()
  .append('svg:svg')
  .classed('led', true)
  .attr('width', (radius + margin) * 2)
  .append('svg:g')
  .attr('transform', `translate(${radius + margin},${radius + margin})`)
  .call(tron.led)

// good
const leds = stage.selectAll('.led').data(data)
```

#### Whitespace - after-blocks

Leave a blank line after blocks and before the next statement.

```js
// bad
if (foo) {
  return bar
}
return baz

// good
if (foo) {
  return bar
}

return baz

// bad
const obj = {
  foo() {},
  bar() {},
}
return obj

// good
const obj = {
  foo() {},

  bar() {},
}

return obj

// bad
const arr = [function foo() {}, function bar() {}]
return arr

// good
const arr = [function foo() {}, function bar() {}]

return arr
```

#### Whitespace - padded-blocks

Do not pad your blocks with blank lines. eslint: [`padded-blocks`](https://eslint.org/docs/rules/padded-blocks.html)

```js
// bad
function bar() {
  console.log(foo)
}

// bad
if (baz) {
  console.log(qux)
} else {
  console.log(foo)
}

// bad
class Foo {
  constructor(bar) {
    this.bar = bar
  }
}

// good
function bar() {
  console.log(foo)
}

// good
if (baz) {
  console.log(qux)
} else {
  console.log(foo)
}
```

#### Whitespace - no-multiple-blanks

Do not use multiple blank lines to pad your code. eslint: [`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines)

<!-- markdownlint-disable MD012 -->

```js
// bad
class Person {
constructor(fullName, email, birthday) {
  this.fullName = fullName;
```

      this.email = email;


      this.setAge(birthday);
    }


    setAge(birthday) {
      const today = new Date();


      const age = this.getAge(today, birthday);


      this.age = age;
    }


    getAge(today, birthday) {
      // ..
    }

}

// good
class Person {
constructor(fullName, email, birthday) {
this.fullName = fullName;
this.email = email;
this.setAge(birthday);
}

    setAge(birthday) {
      const today = new Date();
      const age = getAge(today, birthday);
      this.age = age;
    }

    getAge(today, birthday) {
      // ..
    }

}

````

#### Whitespace - in-parens

Do not add spaces inside parentheses. eslint: [`space-in-parens`](https://eslint.org/docs/rules/space-in-parens.html)

```js
// bad
function bar(foo) {
return foo
}

// good
function bar(foo) {
return foo
}

// bad
if (foo) {
console.log(foo)
}

// good
if (foo) {
console.log(foo)
}
````

#### Whitespace - in-brackets

Do not add spaces inside brackets. eslint: [`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing.html)

```js
// bad
const foo = [1, 2, 3]
console.log(foo[0])

// good
const foo = [1, 2, 3]
console.log(foo[0])
```

#### Whitespace - in-braces

Add spaces inside curly braces. eslint: [`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing.html)

```js
// bad
const foo = { clark: 'kent' }

// good
const foo = { clark: 'kent' }
```

#### Whitespace - max-len

Avoid having lines of code that are longer than 100 characters (including ###: per [above](#Strings - line-length

long strings are exempt from this rule, and should not be broken up. eslint: [`max-len`](https://eslint.org/docs/rules/max-len.html)

> Why? This ensures readability and maintainability.

```js
// bad
const foo =
  jsonData &&
  jsonData.foo &&
  jsonData.foo.bar &&
  jsonData.foo.bar.baz &&
  jsonData.foo.bar.baz.quux &&
  jsonData.foo.bar.baz.quux.xyzzy

// bad
$.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } })
  .done(() => console.log('Congratulations!'))
  .fail(() => console.log('You have failed this city.'))

// good
const foo =
  jsonData &&
  jsonData.foo &&
  jsonData.foo.bar &&
  jsonData.foo.bar.baz &&
  jsonData.foo.bar.baz.quux &&
  jsonData.foo.bar.baz.quux.xyzzy

// good
$.ajax({
  method: 'POST',
  url: 'https://airbnb.com/',
  data: { name: 'John' },
})
  .done(() => console.log('Congratulations!'))
  .fail(() => console.log('You have failed this city.'))
```

#### Whitespace - block-spacing

Require consistent spacing inside an open block token and the next token on the same line. This rule also enforces consistent spacing inside a close block token and previous token on the same line. eslint: [`block-spacing`](https://eslint.org/docs/rules/block-spacing)

```js
// bad
function foo() {
  return true
}
if (foo) {
  bar = 0
}

// good
function foo() {
  return true
}
if (foo) {
  bar = 0
}
```

#### Whitespace - comma-spacing

Avoid spaces before commas and require a space after commas. eslint: [`comma-spacing`](https://eslint.org/docs/rules/comma-spacing)

```js
// bad
var foo = 1,
  bar = 2
var arr = [1, 2]

// good
var foo = 1,
  bar = 2
var arr = [1, 2]
```

#### Whitespace - computed-property-spacing

Enforce spacing inside of computed property brackets. eslint: [`computed-property-spacing`](https://eslint.org/docs/rules/computed-property-spacing)

```js
// bad
obj[foo]
obj['foo']
var x = { [b]: a }
obj[foo[bar]]

// good
obj[foo]
obj['foo']
var x = { [b]: a }
obj[foo[bar]]
```

#### Whitespace - func-call-spacing

Avoid spaces between functions and their invocations. eslint: [`func-call-spacing`](https://eslint.org/docs/rules/func-call-spacing)

```js
// bad
func()

func()

// good
func()
```

#### Whitespace - key-spacing

Enforce spacing between keys and values in object literal properties. eslint: [`key-spacing`](https://eslint.org/docs/rules/key-spacing)

```js
// bad
var obj = { foo: 42 }
var obj2 = { foo: 42 }

// good
var obj = { foo: 42 }
```

#### Whitespace - no-trailing-spaces

Avoid trailing spaces at the end of lines. eslint: [`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces)

#### Whitespace - no-multiple-empty-lines

Avoid multiple empty lines, only allow one newline at the end of files, and avoid a newline at the beginning of files. eslint: [`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines)

<!-- markdownlint-disable MD012 -->

```js
// bad - multiple empty lines
var x = 1
```

var y = 2;

// bad - 2+ newlines at end of file
var x = 1;
var y = 2;

// bad - 1+ newline(s) at beginning of file

var x = 1;
var y = 2;

// good
var x = 1;
var y = 2;

````
<!-- markdownlint-enable MD012 -->

**[⬆ back to top](#table-of-contents)**

### Commas

#### Commas - leading-trailing

Leading commas: **Nope.** eslint: [`comma-style`](https://eslint.org/docs/rules/comma-style.html)

```js
// bad
const story = [once, upon, aTime]

// good
const story = [once, upon, aTime]

// bad
const hero = {
firstName: 'Ada',
lastName: 'Lovelace',
birthYear: 1815,
superPower: 'computers',
}

// good
const hero = {
firstName: 'Ada',
lastName: 'Lovelace',
birthYear: 1815,
superPower: 'computers',
}
````

#### Commas - dangling

Additional trailing comma: **Yup.** eslint: [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle.html)

> Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don’t have to worry about the [trailing comma problem](https://github.com/airbnb/javascript/blob/es5-deprecated/es5/README.md#commas) in legacy browsers.

```diff
// bad - git diff without trailing comma
const hero = {
    firstName: 'Florence',
-    lastName: 'Nightingale'
+    lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing']
};

// good - git diff with trailing comma
const hero = {
    firstName: 'Florence',
    lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing'],
};
```

```js
// bad
const hero = {
  firstName: 'Dana',
  lastName: 'Scully',
}

const heroes = ['Batman', 'Superman']

// good
const hero = {
  firstName: 'Dana',
  lastName: 'Scully',
}

const heroes = ['Batman', 'Superman']

// bad
function createHero(firstName, lastName, inventorOf) {
  // does nothing
}

// good
function createHero(firstName, lastName, inventorOf) {
  // does nothing
}

// good (note that a comma must not appear after a "rest" element)
function createHero(firstName, lastName, inventorOf, ...heroArgs) {
  // does nothing
}

// bad
createHero(firstName, lastName, inventorOf)

// good
createHero(firstName, lastName, inventorOf)

// good (note that a comma must not appear after a "rest" element)
createHero(firstName, lastName, inventorOf, ...heroArgs)
```

**[⬆ back to top](#table-of-contents)**

### Semicolons

#### Semicolons - required

**Yup.** eslint: [`semi`](https://eslint.org/docs/rules/semi.html)

> Why? When JavaScript encounters a line break without a semicolon, it uses a set of rules called [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion) to determine whether or not it should regard that line break as the end of a statement, and (as the name implies) place a semicolon into your code before the line break if it thinks so. ASI contains a few eccentric behaviors, though, and your code will break if JavaScript misinterprets your line break. These rules will become more complicated as new features become a part of JavaScript. Explicitly terminating your statements and configuring your linter to catch missing semicolons will help prevent you from encountering issues.

```js
// bad - raises exception
const luke = {}
const leia = {}[(luke, leia)].forEach(jedi => (jedi.father = 'vader'))

// bad - raises exception
const reaction = 'No! That’s impossible!'(
  (async function meanwhileOnTheFalcon() {
    // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
    // ...
  })()
)

// bad - returns `undefined` instead of the value on the next line - always happens when `return` is on a line by itself because of ASI!
function foo() {
  return
  ;('search your feelings, you know it to be foo')
}

// good
const luke = {}
const leia = {}
;[luke, leia].forEach(jedi => {
  jedi.father = 'vader'
})

// good
const reaction = 'No! That’s impossible!'
;(async function meanwhileOnTheFalcon() {
  // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
  // ...
})()

// good
function foo() {
  return 'search your feelings, you know it to be foo'
}
```

[Read more](https://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214#7365214).

**[⬆ back to top](#table-of-contents)**

### Type Casting & Coercion

#### Coercion - explicit

Perform type coercion at the beginning of the statement.

#### Coercion - strings

Strings: eslint: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

```js
// => this.reviewScore = 9;

// bad
const totalScore = new String(this.reviewScore) // typeof totalScore is "object" not "string"

// bad
const totalScore = this.reviewScore + '' // invokes this.reviewScore.valueOf()

// bad
const totalScore = this.reviewScore.toString() // isn’t guaranteed to return a string

// good
const totalScore = String(this.reviewScore)
```

#### Coercion - numbers

Numbers: Use `Number` for type casting and `parseInt` always with a radix for parsing strings. eslint: [`radix`](https://eslint.org/docs/rules/radix) [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

```js
const inputValue = '4'

// bad
const val = new Number(inputValue)

// bad
const val = +inputValue

// bad
const val = inputValue >> 0

// bad
const val = parseInt(inputValue)

// good
const val = Number(inputValue)

// good
const val = parseInt(inputValue, 10)
```

#### Coercion - comment-deviations

If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](https://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you’re doing.

```js
// good
/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to coerce it to a
 * Number made it a lot faster.
 */
const val = inputValue >> 0
```

#### Coercion - bitwise

**Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](https://es5.github.io/#x4.3.19), but bitshift operations always return a 32-bit integer ([source](https://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [Discussion](https://github.com/airbnb/javascript/issues/109). Largest signed 32-bit Int is 2,147,483,647:

```js
2147483647 >> 0 // => 2147483647
2147483648 >> 0 // => -2147483648
2147483649 >> 0 // => -2147483647
```

#### Coercion - booleans

Booleans: eslint: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

```js
const age = 0

// bad
const hasAge = new Boolean(age)

// good
const hasAge = Boolean(age)

// best
const hasAge = !!age
```

**[⬆ back to top](#table-of-contents)**

### Naming Conventions

#### Naming - descriptive

Avoid single letter names. Be descriptive with your naming. eslint: [`id-length`](https://eslint.org/docs/rules/id-length)

```js
// bad
function q() {
  // ...
}

// good
function query() {
  // ...
}
```

#### Naming - camelCase

Use camelCase when naming objects, functions, and instances. eslint: [`camelcase`](https://eslint.org/docs/rules/camelcase.html)

```js
// bad
const OBJEcttsssss = {}
const this_is_my_object = {}
function c() {}

// good
const thisIsMyObject = {}
function thisIsMyFunction() {}
```

#### Naming - PascalCase

Use PascalCase only when naming constructors or classes. eslint: [`new-cap`](https://eslint.org/docs/rules/new-cap.html)

```js
// bad
function user(options) {
  this.name = options.name
}

const bad = new user({
  name: 'nope',
})

// good
class User {
  constructor(options) {
    this.name = options.name
  }
}

const good = new User({
  name: 'yup',
})
```

#### Naming - leading-underscore

Do not use trailing or leading underscores. eslint: [`no-underscore-dangle`](https://eslint.org/docs/rules/no-underscore-dangle.html)

> Why? JavaScript does not have the concept of privacy in terms of properties or methods. Although a leading underscore is a common convention to mean “private”, in fact, these properties are fully public, and as such, are part of your public API contract. This convention might lead developers to wrongly think that a change won’t count as breaking, or that tests aren’t needed. tl;dr: if you want something to be “private”, it must not be observably present.

```js
// bad
this.__firstName__ = 'Panda'
this.firstName_ = 'Panda'
this._firstName = 'Panda'

// good
this.firstName = 'Panda'

// good, in environments where WeakMaps are available
// see https://kangax.github.io/compat-table/es6/#test-WeakMap
const firstNames = new WeakMap()
firstNames.set(this, 'Panda')
```

#### Naming - self-this

Don’t save references to `this`. Use arrow functions or [Function#bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).

```js
// bad
function foo() {
  const self = this
  return function() {
    console.log(self)
  }
}

// bad
function foo() {
  const that = this
  return function() {
    console.log(that)
  }
}

// good
function foo() {
  return () => {
    console.log(this)
  }
}
```

#### Naming - filename-matches-export

A base filename should exactly match the name of its default export.

```js
// file 1 contents
class CheckBox {
  // ...
}
export default CheckBox

// file 2 contents
export default function fortyTwo() {
  return 42
}

// file 3 contents
export default function insideDirectory() {}

// in some other file
// bad
import CheckBox from './checkBox' // PascalCase import/export, camelCase filename
import FortyTwo from './FortyTwo' // PascalCase import/filename, camelCase export
import InsideDirectory from './InsideDirectory' // PascalCase import/filename, camelCase export

// bad
import CheckBox from './check_box' // PascalCase import/export, snake_case filename
import forty_two from './forty_two' // snake_case import/filename, camelCase export
import inside_directory from './inside_directory' // snake_case import, camelCase export
import index from './inside_directory/index' // requiring the index file explicitly
import insideDirectory from './insideDirectory/index' // requiring the index file explicitly

// good
import CheckBox from './CheckBox' // PascalCase export/import/filename
import fortyTwo from './fortyTwo' // camelCase export/import/filename
import insideDirectory from './insideDirectory' // camelCase export/import/directory name/implicit "index"
// ^ supports both insideDirectory.js and insideDirectory/index.js
```

#### Naming - camelCase-default-export

Use camelCase when you export-default a function. Your filename should be identical to your function’s name.

```js
function makeStyleGuide() {
  // ...
}

export default makeStyleGuide
```

#### Naming - PascalCase-singleton

Use PascalCase when you export a constructor / class / singleton / function library / bare object.

```js
const AirbnbStyleGuide = {
  es6: {},
}

export default AirbnbStyleGuide
```

#### Naming - Acronyms-and-Initialisms

Acronyms and initialisms should always be all uppercased, or all lowercased.

> Why? Names are for readability, not to appease a computer algorithm.

```js
// bad
import SmsContainer from './containers/SmsContainer'

// bad
const HttpRequests = [
  // ...
]

// good
import SMSContainer from './containers/SMSContainer'

// good
const HTTPRequests = [
  // ...
]

// also good
const httpRequests = [
  // ...
]

// best
import TextMessageContainer from './containers/TextMessageContainer'

// best
const requests = [
  // ...
]
```

#### Naming - uppercase

You may optionally uppercase a constant only if it (1) is exported, (2) is a `const` (it can not be reassigned), and (3) the programmer can trust it (and its nested properties) to never change.

> Why? This is an additional tool to assist in situations where the programmer would be unsure if a variable might ever change. UPPERCASE_VARIABLES are letting the programmer know that they can trust the variable (and its properties) not to change.

- What about all `const` variables? - This is unnecessary, so uppercasing should not be used for constants within a file. It should be used for exported constants however.
- What about exported objects? - Uppercase at the top level of export (e.g. `EXPORTED_OBJECT.key`) and maintain that all nested properties do not change.

```js
// bad
const PRIVATE_VARIABLE = 'should not be unnecessarily uppercased within a file'

// bad
export const THING_TO_BE_CHANGED = 'should obviously not be uppercased'

// bad
export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables'

// ---

// allowed but does not supply semantic value
export const apiKey = 'SOMEKEY'

// better in most cases
export const API_KEY = 'SOMEKEY'

// ---

// bad - unnecessarily uppercases key while adding no semantic value
export const MAPPING = {
  KEY: 'value',
}

// good
export const MAPPING = {
  key: 'value',
}
```

**[⬆ back to top](#table-of-contents)**

### Accessors

#### Accessors - not-required

Accessor functions for properties are not required.

#### Accessors - no-getters-setters

Do not use JavaScript getters/setters as they cause unexpected side effects and are harder to test, maintain, and reason about. Instead, if you do make accessor functions, use `getVal()` and `setVal('hello')`.

```js
// bad
class Dragon {
  get age() {
    // ...
  }

  set age(value) {
    // ...
  }
}

// good
class Dragon {
  getAge() {
    // ...
  }

  setAge(value) {
    // ...
  }
}
```

#### Accessors - boolean-prefix

If the property/method is a `boolean`, use `isVal()` or `hasVal()`.

```js
// bad
if (!dragon.age()) {
  return false
}

// good
if (!dragon.hasAge()) {
  return false
}
```

#### Accessors - consistent

It’s okay to create `get()` and `set()` functions, but be consistent.

```js
class Jedi {
  constructor(options = {}) {
    const lightsaber = options.lightsaber || 'blue'
    this.set('lightsaber', lightsaber)
  }

  set(key, val) {
    this[key] = val
  }

  get(key) {
    return this[key]
  }
}
```

**[⬆ back to top](#table-of-contents)**

### Events

#### Events - hash

When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass an object literal (also known as a "hash") instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:

```js
// bad
$(this).trigger('listingUpdated', listing.id)

// ...

$(this).on('listingUpdated', (e, listingID) => {
  // do something with listingID
})
```

prefer:

```js
// good
$(this).trigger('listingUpdated', { listingID: listing.id })

// ...

$(this).on('listingUpdated', (e, data) => {
  // do something with data.listingID
})
```

**[⬆ back to top](#table-of-contents)**

### ECMAScript 5 Compatibility

#### es5-Compat - kangax

Refer to [Kangax](https://twitter.com/kangax/)’s ES5 [compatibility table](https://kangax.github.io/es5-compat-table/).

**[⬆ back to top](#table-of-contents)**

### ECMAScript 6+ (ES 2015+) Styles

- [28.1](#es6-styles) This is a collection of links to the various ES6+ features.

1. [Arrow Functions](#arrow-functions)

#### Classes - constructors

1. [Object Shorthand](#es6-object-shorthand)
1. [Object Concise](#es6-object-concise)
1. [Object Computed Properties](#es6-computed-properties)
1. [Template Strings](#es6-template-literals)
1. [Destructuring](#destructuring)
1. [Default Parameters](#es6-default-parameters)
1. [Rest](#es6-rest)
1. [Array Spreads](#es6-array-spreads)
1. [Let and Const](#references)
   ###r ](#es2016-properties--exponentiation-operator

1. [Iterators and Generators](#iterators-and-generators)
1. [Modules](#modules)

- [28.2](#tc39-proposals) Do not use [TC39 proposals](https://github.com/tc39/proposals) that have not reached stage 3.

> Why? [They are not finalized](https://tc39.github.io/process-document/), and they are subject to change or to be withdrawn entirely. We want to use JavaScript, and proposals are not JavaScript yet.

**[⬆ back to top](#table-of-contents)**

### Standard Library

The [Standard Library](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects)
contains utilities that are functionally broken but remain for legacy reasons.

#### standard-Library - isnan

Use `Number.isNaN` instead of global `isNaN`.
eslint: [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

> Why? The global `isNaN` coerces non-numbers to numbers, returning true for anything that coerces to NaN.
> If this behavior is desired, make it explicit.

```js
// bad
isNaN('1.2') // false
isNaN('1.2.3') // true

// good
Number.isNaN('1.2.3') // false
Number.isNaN(Number('1.2.3')) // true
```

#### standard-Library - isfinite

Use `Number.isFinite` instead of global `isFinite`.
eslint: [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

> Why? The global `isFinite` coerces non-numbers to numbers, returning true for anything that coerces to a finite number.
> If this behavior is desired, make it explicit.

```js
// bad
isFinite('2e3') // true

// good
Number.isFinite('2e3') // false
Number.isFinite(parseInt('2e3', 10)) // true
```

**[⬆ back to top](#table-of-contents)**

### Testing

#### Testing - yup

**Yup.**

```js
function foo() {
  return true
}
```

#### Testing - for-real

**No, but seriously**:

- Whichever testing framework you use, you should be writing tests!
- Strive to write many small pure functions, and minimize where mutations occur.
- Be cautious about stubs and mocks - they can make your tests more brittle.
- We primarily use [`mocha`](https://www.npmjs.com/package/mocha) and [`jest`](https://www.npmjs.com/package/jest) at Airbnb. [`tape`](https://www.npmjs.com/package/tape) is also used occasionally for small, separate modules.
- 100% test coverage is a good goal to strive for, even if it’s not always practical to reach it.
- Whenever you fix a bug, _write a regression test_. A bug fixed without a regression test is almost certainly going to break again in the future.

**[⬆ back to top](#table-of-contents)**

### Contributors

- [View Contributors](https://github.com/vtex/javascript/graphs/contributors)

This document was based on _[`airbnb/javascript`](https://github.com/airbnb/javascript)_.
