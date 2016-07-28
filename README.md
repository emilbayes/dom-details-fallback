# `dom-details-fallback`

> Fallback for the interactive details element, emulating Chrome's behaviour in older browsers

## Install

```sh
npm install dom-details-fallback
```

## Usage

```js
require('dom-details-fallback')(null, true)
```

To create the open/close marker the `::before` pseudo element is used. This is normally styled with a vendor specific pseudo element, eg. `::-webkit-details-marker`, so consider this if you want to change this:

```css
summary::before, summary:before {
  /* Custom closed marker */
}

details[open="open"] summary::before,
details[open="open"] summary:before {
  /* Custom open marker */
}
```

## API

### `applyDetailsFallback(parent, injectCss)`

Will only polyfill if the `open` property is not present on a newly created `<details>` element.

#### `parent`
Type: `Element|Document`
Default: `window.document`

Parent of the `<details>` elements that should be polyfilled.

#### `injectCss`
Type: `Boolean`<br>
Default: `true`

Inject default CSS into `<head>`.

## License

[ISC](LICENSE.md)
