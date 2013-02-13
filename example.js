var jp = require('./main')

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