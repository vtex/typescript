# Browser Support

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Guidelines](#guidelines)
- [Polyfills](#polyfills)

<!-- /code_chunk_output -->

VTEX browser support is split in two contexts: `storefront` and `admin areas`.

For `storefronts`, we strive to support all major browsers all the way to IE 11:

```text
# Browserslist example (date 29/01/2020)
IE 11
Edge 17+
Safari 8+
Chrome 77+
Firefox 70+
```

For `admin areas`, the main targets are evergreen browsers, such as Firefox, Chrome, the new Edge, etc:

```text
# Browserslist example (date 29/01/2020)
Edge 17+
Safari 12.1
Chrome 77+
Firefox 70+
```

## Guidelines

It's usually in a dev's heart the desire to use the newest Javascript feature or a new fancy CSS property, such as `display: grid`, `position: sticky`, `Map()`, `Set()`, etc. However, _browser support_ and _cross-browser compatibility_ are the first concerns that should come to the developer's mind. Make sure to always check `MDN` and `Can I Use` for the current support of the desired functionality.

- [MDN - Mozilla Developer Network](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)

If the functionality is not well supported and yet it's needed for some _important_ reason, a [polyfill or ponyfill](https://ponyfoo.com/articles/polyfills-or-ponyfills) can help solving the problem. Keep in mind that polyfills add extra weight to the store assets and not always perform as good as their native implementations.

## Polyfills

> A polyfill is a piece of code used to provide modern functionality on older browsers that do not natively support it.

To be possible to write and use modern Javascript and CSS features while supporting all the way to IE 11, some polyfills are automatically added to every VTEX store:

- [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [`Array.prototype.fill()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
- [`Array.prototype.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`Array.prototype.findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [`Array.prototype.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [`Function.name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
- [`IntersectionObserver()`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
- [`Intl.~locale.${locale}`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Locale)
- [`Map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [`Number.isInteger()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
- [`Number.isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
- [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [`Object.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [`Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [`Object.values()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [`Promise()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`Set()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [`String.prototype.endsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
- [`String.prototype.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
- [`String.prototype.startsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
- [`Symbol()`](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)
- [`URL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL)
- [`WeakMap()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
