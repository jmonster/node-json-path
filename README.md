node-json-path
==============

recurses over a js object to determine it's complex key and then sets that key to the leaf value

## example
```javascript
var jp = require('json-path')

console.log(jp({
  "header": "/headers/header1.html",
  "footer": "/footers/footer1.html",
  "checkout": {
    "header":"/headers/header9.html",
    "foo": {
      "bool":!true,
      "num":123,
      "arr":"NOT SUPPORTED"
    }
  }
}))
```

## output
```javascript
[
  'header': '/headers/header1.html',
  'footer': '/footers/footer1.html',
  'header-checkout': '/headers/header9.html',
  'bool-foo-checkout': false,
  'num-foo-checkout': 123,
  'arr-foo-checkout': 'NOT SUPPORTED'
]
```