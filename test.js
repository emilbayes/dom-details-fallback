var detailsFallback = require('.')

var details = document.createElement('details')

var h1 = document.createElement('h1')
h1.textContent = 'Hello world!'

var p = document.createElement('p')
p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

var summary = document.createElement('summary')
summary.textContent = 'Some Details Here'

var nakedDetails = details.cloneNode()
nakedDetails.appendChild(h1.cloneNode(true))
nakedDetails.appendChild(p.cloneNode(true))

document.body.appendChild(nakedDetails)

var normalDetails = details.cloneNode()
normalDetails.appendChild(summary.cloneNode(true))
normalDetails.appendChild(h1.cloneNode(true))
normalDetails.appendChild(p.cloneNode(true))

document.body.appendChild(normalDetails)

var nestedDetails = normalDetails.cloneNode(true)
nestedDetails.appendChild(normalDetails.cloneNode(true))

document.body.appendChild(nestedDetails)

detailsFallback(null, true)
