var insertCss = require('insert-css')

var css = 'details{display:block;}details:not([open]) *:not(summary){display:none;}details > summary{display:block;vertical-align:middle;}summary::before,summary:before{content:"▶";display:inline-block;width:.8em;height:.15em;text-align:center;vertical-align:middle;font-size:120%;line-height:0;}details[open="open"] summary::before,details[open="open"] summary:before{content:"▼";font-size:80%;width:1.2em;}'

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
