var insertCss = require('insert-css')

var css = 'details{display:block;}details:not([open]) *:not(summary){display:none;}details > summary{display:block;}summary::before,summary:before{content:""▶";font-size:75%;line-height:1.5;vertical-align:bottom;display:inline-block;width:1.5em;height:1.5em;}details[open="open"] summary::before,details[open="open"] summary:before{content:"▼";}'

function setTextContent (elm, text) {
  if (elm.textContent) elm.textContent = text
  else elm.innerText = text
}

function on (elm, event, listener) {
  if (elm.addEventListener) elm.addEventListener(event, listener)
  else elm.attachEvent(event, listener)
}

function forEach (arr, fn, thisArg) {
  if (typeof [].forEach === 'function') return [].forEach.call(arr, fn)
  for (var i = 0; i < arr.length; i++) {
    fn.call(thisArg, arr[i], i, arr)
  }
}

module.exports = function (parent, injectCss) {
  if ('open' in document.createElement('details')) return

  if (injectCss !== false) insertCss(css)

  if (parent == null) {
    parent = window.document
  }

  forEach(parent.querySelectorAll('details'), function (detailsElm) {
    var summaryElm = detailsElm.querySelector('summary')

    if (summaryElm == null) {
      summaryElm = document.createElement('summary')

      setTextContent(summaryElm, 'Details')

      detailsElm.insertBefore(summaryElm, detailsElm.firstChild)
    }

    on(summaryElm, 'click', function toggle (e) {
      if (detailsElm.hasAttribute('open')) detailsElm.removeAttribute('open')
      else detailsElm.setAttribute('open', 'open')
    })
  })
}
