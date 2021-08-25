# VTEX Typescript Style Guide

[![Downloads](https://img.shields.io/npm/dm/eslint-config-vtex.svg)](https://www.npmjs.com/package/eslint-config-vtex)
[![Downloads](https://img.shields.io/npm/dm/eslint-config-vtex-react.svg)](https://www.npmjs.com/package/eslint-config-vtex-react)

As projects get bigger and more people start collaborating, it gets harder to maintain them and implement new functionalities. By defining a standard way to write Typescript applications, we can not only automate the formatting and static analysis steps, but also speed up the whole workflow by reducing the time a developer needs to focus on other tasks. A developer's job should be to focus on solving their problem in hand, not to fix the indentation level or inserting a line break.

This style guide aims to make every Typescript related code written by any VTEX developer seems to have been written by a single person. With this in mind, feature implementations, mantainances and even reviews can be sped up, as everyone will be looking to code similar to theirs, while keeping a essential minimal code quality.

**This style guide doesn't include formatting rules since it's expected that prettier is configured to use the `@vtex/prettier-config` preset.**

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
  - [Objects - computed-properties](#objects-computed-properties)
  - [Objects - object-shorthand](#objects-object-shorthand)
  - [Objects - concise-properties](#objects-concise-properties)
  - [Objects - grouped-shorthand](#objects-grouped-shorthand)
  - [Objects - quoted-props](#objects-quoted-props)
  - [Objects - prototype-builtins](#objects-prototype-builtins)
  - [Objects - rest-spread](#objects-rest-spread)
- [Arrays](#arrays)
  - [Arrays - literals](#arrays-literals)
  - [Arrays - push](#arrays-push)
  - [Arrays - array-spreads](#arrays-array-spreads)
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
  - [Strings - template-literals](#strings-template-literals)
  - [Strings - eval](#strings-eval)
  - [Strings - escaping](#strings-escaping)
- [Functions](#functions)
  - [Functions - iife](#functions-iife)
  - [Functions - in-blocks](#functions-in-blocks)
  - [Functions - arguments-shadow](#functions-arguments-shadow)
  - [Functions - rest parameters](#functions-rest-parameters)
  - [Functions - default-parameters](#functions-default-parameters)
  - [Functions - default-side-effects](#functions-default-side-effects)
  - [Functions - defaults-last](#functions-defaults-last)
  - [Functions - constructor](#functions-constructor)
  - [Functions - reassign-params](#functions-reassign-params)
  - [Functions - spread-vs-apply](#functions-spread-vs-apply)
- [Arrow Functions](#arrow-functions)
  - [Arrows - use-them](#arrows-use-them)
  - [Arrows - implicit-return](#arrows-implicit-return)
- [Classes & Constructors](#classes-constructors)
  - [Constructors - use-class](#constructors-use-class)
  - [Constructors - extends](#constructors-extends)
  - [Constructors - chaining](#constructors-chaining)
  - [Constructors - toString](#constructors-tostring)
  - [Constructors - no-useless](#constructors-no-useless)
  - [Classes - no-duplicate-members](#classes-no-duplicate-members)
- [Modules](#modules)
  - [Modules - use-them](#modules-use-them)
  - [Modules - prefer-named-imports](#modules-prefer-named-imports)
  - [Modules - no-duplicate-imports](#modules-no-duplicate-imports)
  - [Modules - no-mutable-exports](#modules-no-mutable-exports)
  - [Modules - prefer-default-export](#modules-prefer-default-export)
  - [Modules - imports-first](#modules-imports-first)
  - [Modules - multiline-imports-over-newlines](#modules-multiline-imports-over-newlines)
  - [Modules - no-webpack-loader-syntax](#modules-no-webpack-loader-syntax)
- [Iterators and Generators](#iterators-and-generators)
  - [Iterators](#iterators)
- [Properties](#properties)
  - [Properties - dot](#properties-dot)
  - [Properties - bracket](#properties-bracket)
  - [Properties - exponentiation-operator](#properties-exponentiation-operator)
- [Variables](#variables)
  - [Variables - const](#variables-const)
  - [Variables - one-const](#variables-one-const)
  - [Variables - const-let-group](#variables-const-let-group)
  - [Variables - define-where-used](#variables-define-where-used)
  - [Variables - no-chain-assignment](#variables-no-chain-assignment)
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
  - [Comparison - More Information](#comparison-more-information)
  - [Comparison - switch-blocks](#comparison-switch-blocks)
  - [Comparison - nested-ternaries](#comparison-nested-ternaries)
  - [Comparison - unneeded-ternary](#comparison-unneeded-ternary)
- [Blocks](#blocks)
  - [Blocks - no-else-return](#blocks-no-else-return)
- [Control Statements](#control-statements)
  - [Control Statements - value-selection](#control-statements-value-selection)
- [Comments](#comments)
  - [Comments - multiline](#comments-multiline)
  - [Comments - singleline](#comments-singleline)
  - [Comments - spaces](#comments-spaces)
  - [Comments - action-items](#comments-action-items)
  - [Comments - fix-me](#comments-fix-me)
  - [Comments - todo](#comments-todo)
- [Type Casting & Coercion](#type-casting-coercion)
  - [Coercion - explicit](#coercion-explicit)
  - [Coercion - strings](#coercion-strings)
  - [Coercion - numbers](#coercion-numbers)
  - [Coercion - booleans](#coercion-booleans)
  - [Coercion - comment-deviations](#coercion-comment-deviations)
  - [Coercion - bitwise](#coercion-bitwise)
- [Naming Conventions](#naming-conventions)
  - [Naming - descriptive](#naming-descriptive)
  - [Naming - camelCase](#naming-camelcase)
  - [Naming - PascalCase](#naming-pascalcase)
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
- [Standard Library](#standard-library)
  - [Standard Library - isNaN](#standard-library-isnan)
  - [Standard Library - isfinite](#standard-library-isfinite)
- [Testing](#testing)
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

- Symbols cannot be faithfully [polyfilled](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill), so they should not be used when targeting browsers/environments that don’t support them natively.

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

Use `const` for all of your references; avoid using `var`.

Eslint rules: [`prefer-const`](https://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign.html)

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

If you must reassign references, use `let` instead of `var`.

Eslint rule: [`no-var`](https://eslint.org/docs/rules/no-var.html)

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

Use the literal syntax for object creation.

Eslint rule: [`no-new-object`](https://eslint.org/docs/rules/no-new-object.html)

```js
// bad
const item = new Object()

// good
const item = {}
```

#### Objects - computed-properties

Use computed property names when creating objects with dynamic property names.

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

#### Objects - object-shorthand

Use object method shorthand.

Eslint rule: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

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

#### Objects - concise-properties

Use property value shorthand.

Eslint rule: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

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

Group your shorthand properties at the beginning or at the end of your object declaration.

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

Only quote properties that are invalid identifiers.

Eslint rule: [`quote-props`](https://eslint.org/docs/rules/quote-props.html)

> Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

```js
// bad
const bad = {
  'foo': 3,
  'bar': 4,
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

Do not call `Object.prototype` methods directly, such as `hasOwnProperty`, `propertyIsEnumerable`, and `isPrototypeOf`.

Eslint rule: [`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)

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

> Why? It's easier to read and more performant in engines that support it, while making the code declarative instead of imperative.

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

Use the literal syntax for array creation.

Eslint rule: [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor.html)

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

#### Arrays - array-spreads

Use array spreads `...` to copy arrays.

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

Eslint rule: [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)

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
  [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];

// good
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];
```

**[⬆ back to top](#table-of-contents)**

### Destructuring

#### Destructuring - object

Use object destructuring when accessing and using multiple properties of an object.

Eslint rule: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

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

Use array destructuring.

Eslint rule: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

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

Use single quotes `''` for strings.

Eslint rule: [`quotes`](https://eslint.org/docs/rules/quotes.html)

```js
// bad
const name = 'Capt. Janeway'

// bad - template literals should contain interpolation or newlines
const name = `Capt. Janeway`

// good
const name = 'Capt. Janeway'
```

#### Strings - line-length

Strings that cause the line to go over 80 characters should not be written across multiple lines using string concatenation.

> Why? Broken strings are painful to work with and make code less searchable.

```js
// bad
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// bad
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// good
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```

#### Strings - template-literals

When programmatically building up strings, use template strings instead of concatenation.

Eslint rules: [`prefer-template`](https://eslint.org/docs/rules/prefer-template.html), [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)

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

// good
function sayHi(name) {
  return `How are you, ${name}?`
}
```

#### Strings - eval

Never use `eval()` on a string, it opens too many vulnerabilities.

Eslint rule: [`no-eval`](https://eslint.org/docs/rules/no-eval)

#### Strings - escaping

Do not unnecessarily escape characters in strings.

Eslint rule: [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)

> Why? Backslashes harm readability, thus they should only be present when necessary.

```js
// bad
const foo = '\'this\' is "quoted"'

// good
const foo = `my name is '${name}'`
```

**[⬆ back to top](#table-of-contents)**

### Functions

#### Functions - iife

Wrap immediately invoked function expressions in parentheses.

Eslint rule: [`wrap-iife`](https://eslint.org/docs/rules/wrap-iife.html)

> Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. **Note that in a world with modules everywhere, you almost never need an IIFE.**

```js
// immediately-invoked function expression (IIFE)
;(function() {
  console.log('Welcome to the Internet. Please follow me.')
})()
```

#### Functions - in-blocks

Never declare a function in a non-function block (`if`, `while`, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears.

Eslint rule: [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func.html)

#### Functions - arguments-shadow

Never name a parameter `arguments`. This will take precedence over the [`arguments` object that is given to every function scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).

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

#### Functions - rest parameters

Don't use `arguments`, opt to use the declarative rest syntax `...` instead.

Eslint rule: [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)

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

#### Functions - default-parameters

Use default parameter syntax rather than mutating function arguments.

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

Eslint rule: [`default-param-last`](https://eslint.org/docs/rules/default-param-last)

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

Never use the Function constructor to create a new function.

Eslint rule: [`no-new-func`](https://eslint.org/docs/rules/no-new-func)

> Why? Creating a function in this way evaluates a string similarly to `eval()`, which opens vulnerabilities.

```js
// bad
var add = new Function('a', 'b', 'return a + b')

// still bad
var subtract = Function('a', 'b', 'return a - b')
```


#### Functions - reassign-params

Never reassign parameters.

Eslint rule: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

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

Prefer the use of the spread operator `...` to call variadic functions.

Eslint rule: [`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)

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

**[⬆ back to top](#table-of-contents)**

### Arrow Functions

#### Arrows - use-them

When you must use an anonymous function (as when passing an inline callback), use arrow function notation.

Eslint rule: [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback.html)

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

If the function body consists of a single statement returning an [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) without side effects, omit the braces and use the implicit return. Otherwise, keep the braces and use a `return` statement.

> Why? Syntactic sugar. It reads well when multiple functions are chained together.

```js
// bad
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number) => `A string containing the ${number + 1}.`);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
  [index]: number,
}));

// No implicit return with side effects
function foo(callback) {
  const val = callback();
  if (val === true) {
    // Do something if callback returns true
  }
}

let bool = false;

// bad
foo(() => bool = true);

// good
foo(() => {
  bool = true;
});
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

#### Constructors - toString

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

Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary.

Eslint rule: [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)

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

Avoid duplicate class members.

Eslint rule: [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)

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

**[⬆ back to top](#table-of-contents)**

### Modules

#### Modules - use-them

Always use modules (`import`/`export`) over a non-standard module system. You can always transpile to your preferred module system.

> Why? Modules are the future, let’s start using the future now.

```js
// bad
const VTEXStyleGuide = require('./VTEXStyleGuide')
module.exports = VTEXStyleGuide.es6

// ok
import VTEXStyleGuide from './VTEXStyleGuide'
export default VTEXStyleGuide.es6

// best
import { es6 } from './VTEXStyleGuide'
export default es6
```

#### Modules - prefer-named-imports

Use wildcard imports cautiously and only if extremely needed. Importing only what is necessary to your code is a good practice.

> Why? It can slow down an application's build step and no one wants to import hundreds of methods to their applications, even if they're going to end up tree-shaken. It's also clearer what's actually being used.

```js
// bad
import * as R from './Ramda'
R.compose()
R.clone()
R.map()

// good
import { compose, clone, map }  from './Ramda'
```

#### Modules - no-duplicate-imports

Only import from a path in one place.

Eslint rule: [`import/no-duplicates`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)

> Why? Having multiple lines that import from the same path can make code harder to maintain.

```js
// bad
import foo from 'foo'
// …
import { named1, named2 } from 'foo'

// good
import foo, { named1, named2 } from 'foo'
```

#### Modules - no-mutable-exports

Do not export mutable bindings.
Eslint rule: [`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

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
Eslint rule: [`import/prefer-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)

> Why? To encourage more files that only ever export one thing, which is better for readability and maintainability.

```js
// bad
export function foo() {}

// good
export default function foo() {}
```

#### Modules - imports-first

Put all `import`s above non-import statements.
Eslint rule: [`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

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
import {
  longNameA,
  longNameB,
  longNameC,
  longNameD,
  longNameE,
} from 'path';
```

#### Modules - no-webpack-loader-syntax

Disallow Webpack loader syntax in module import statements.
Eslint rule: [`import/no-webpack-loader-syntax`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)

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

#### Iterators

Prefer JavaScript’s higher-order functions instead of loops like `for-in` or `for-of`. However, there are valid cases were loops are better suited for the job, like when you can avoid unnecessary costly operations by exiting the loop early.

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

**[⬆ back to top](#table-of-contents)**

### Properties

#### Properties - dot

Use dot notation when accessing properties.

Eslint rule: [`dot-notation`](https://eslint.org/docs/rules/dot-notation.html)

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

#### Properties - exponentiation-operator

Use exponentiation operator `**` when calculating exponentiations.

```js
// bad
const binary = Math.pow(2, 10)

// good
const binary = 2 ** 10
```

**[⬆ back to top](#table-of-contents)**

### Variables

#### Variables - const

Always use `const` or `let` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that.

Eslint rule: [`no-undef`](https://eslint.org/docs/rules/no-undef) [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

```js
// bad
superPower = new SuperPower()

// good
const superPower = new SuperPower()
```

#### Variables - one-const

Use one `const` or `let` declaration per variable or assignment.

Eslint rule: [`one-var`](https://eslint.org/docs/rules/one-var.html)

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

Don’t chain variable assignments.

Eslint rule: [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)

> Why? Chaining variable assignments creates implicit global variables.

```js
// bad
(function example() {
  // JavaScript interprets this as
  // let a = ( b = ( c = 1 ) );
  // The let keyword only applies to variable a; variables b and c become
  // global variables.
  let a = b = c = 1;
}());

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// good
(function example() {
  let a = 1;
  let b = a;
  let c = a;
}());

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// the same applies for `const`
```

#### Variables - no-unused-vars

Disallow unused variables.

Eslint rule: [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)

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

Use `===` and `!==` over `==` and `!=`. It's allowed to check for `nullish` values with `==`.

Eslint rule: [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq.html)

```js
let luke = { name: 'Luke', age: 53, lastLocation: 'Ahch-To' }
let ahsoka = { name: 'Ahsoka', age: 14, lastLocation: undefined }

// bad
function hasKnownLastLocation(jedi) {
  return jedi.lastLocation !== null
}
console.log(luke.age == '53') // true, wrong
console.log(hasKnownLastLocation(ahsoka)) // true, wrong

// good
function hasKnownLastLocation(jedi) {
  return jedi.lastLocation !== null
}
console.log(luke.age === '53') // false
console.log(luke.age === 53) // true
console.log(hasKnownLastLocation(ahsoka)) // false, correct
```

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

#### Comparison - More Information

For more information see [Truth Equality and JavaScript](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll.

#### Comparison - switch-blocks

Use braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`).

Eslint rule: [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations.html)

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

Ternaries should not be nested and generally be single line expressions. Sometimes an `if` statement produces a more readable and understandable code. Always focus on readability, leave obfuscation and minification for the bundler.

```js
// bad
const foo = maybe1 > maybe2
  ? "bar"
  : value1 > value2 ? "baz" : null;

// split into 2 separated ternary expressions
const maybeNull = value1 > value2 ? 'baz' : null;

// better
const foo = maybe1 > maybe2
  ? 'bar'
  : maybeNull;

// best
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
```

#### Comparison - unneeded-ternary

Avoid unneeded ternary statements.

Eslint rule: [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary.html)

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

**[⬆ back to top](#table-of-contents)**

### Blocks

#### Blocks - no-else-return

If an `if` block always executes a `return` statement, the subsequent `else` block is unnecessary. A `return` in an `else if` block following an `if` block that contains a `return` can be separated into multiple `if` blocks.

Eslint rule: [`no-else-return`](https://eslint.org/docs/rules/no-else-return)

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

#### Control Statements - value-selection

Don't use selection operators in place of control statements.

```js
// bad
!isRunning && startRunning();

// good
if (!isRunning) {
  startRunning();
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

Start all comments with a space to make it easier to read.

Eslint rule: [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)

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

#### Comments - action-items

Prefixing your comments with `FIXME` or `TODO` helps other developers quickly understand if you’re pointing out a problem that needs to be revisited, or if you’re suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are `FIXME: -- need to figure this out` or `TODO: -- need to implement`. If possible, link to an existing repository issue.

#### Comments - fix-me

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

### Type Casting & Coercion

#### Coercion - explicit

Perform type coercion at the beginning of the statement.

#### Coercion - strings

Eslint rule: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

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

Use `Number` for type casting and `parseInt` always with a radix for parsing strings.

Eslint rule: [`radix`](https://eslint.org/docs/rules/radix) [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

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

#### Coercion - booleans

Eslint rule: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

```js
const age = 0

// bad
const hasAge = new Boolean(age)

// good
const hasAge = Boolean(age)
const hasAge = !!age
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

**Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](https://es5.github.io/#x4.3.19), but bitshift operations always return a 32-bit integer ([source](https://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. Largest signed 32-bit Int is 2,147,483,647:

```js
2147483647 >> 0 // => 2147483647
2147483648 >> 0 // => -2147483648
2147483649 >> 0 // => -2147483647
```

**[⬆ back to top](#table-of-contents)**

### Naming Conventions

#### Naming - descriptive

Avoid single letter names. Be descriptive with your naming, help others and your future-self understand your work.

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

Use camelCase when naming objects, functions, and instances.

Eslint rule: [`camelcase`](https://eslint.org/docs/rules/camelcase.html)

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

Use PascalCase only when naming constructors or classes.

Eslint rule: [`new-cap`](https://eslint.org/docs/rules/new-cap.html)

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
const VTEXStyleGuide = {}

export default VTEXStyleGuide
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

You may optionally uppercase a constant only if it (1) is a `const` (it can not be reassigned), and (2) the programmer can trust it (and its nested properties) to never change.

> Why? This is an additional tool to assist in situations where the programmer would be unsure if a variable might ever change. UPPERCASE_VARIABLES are letting the programmer know that they can trust the variable (and its properties) not to change.

- What about all `const` variables? - This is unnecessary, so uppercasing should not be used for constants within a file. It should be used for exported constants however.
- What about exported objects? - Uppercase at the top level of export (e.g. `EXPORTED_OBJECT.key`) and maintain that all nested properties do not change.

```js
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

When attaching data payloads to events, pass an object literal (also known as a "hash") instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:

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

### Standard Library

The [Standard Library](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects)
contains utilities that are functionally broken but remain for legacy reasons.

#### Standard Library - isNaN

Use `Number.isNaN` instead of global `isNaN`.

Eslint rule: [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

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

#### Standard Library - isfinite

Use `Number.isFinite` instead of global `isFinite`.

Eslint rule: [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

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

> WIP

- Strive to write many small pure functions, and minimize where mutations occur.
- Be cautious about stubs and mocks - they can make your tests more brittle.
- [`jest`](https://www.npmjs.com/package/jest) is our chosen test runner. Our [`@vtex/test-tools`](https://github.com/vtex/test-tools) is used to abstract some of its configuration.
- 100% test coverage is a good goal to strive for, even if it’s not always practical to reach it.
- Whenever you fix a bug, _write a regression test_. A bug fixed without a regression test is almost certainly going to break again in the future.

**[⬆ back to top](#table-of-contents)**

### Contributors

- [View Contributors](https://github.com/vtex/javascript/graphs/contributors)

This document was based on _[`airbnb/javascript`](https://github.com/airbnb/javascript)_.
