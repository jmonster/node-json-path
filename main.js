var _ = require('underscore')

function getPaths(obj, result, memo) {
  // base case
  if (!memo) { memo = [] }
  if (_.isString(obj) || _.isNumber(obj) || _.isBoolean(obj)) { return result[memo.join('/')] = obj }

  // inductive step
  var keys = _.keys(obj)
  _.each(keys, function(key) {
    var _memo = _.clone(memo)
    _memo.push(key)
    getPaths(obj[key],result,_memo)
  })
}

module.exports = function(obj) {
  var result = []
  getPaths(obj, result, [])
  return result
}