// lodash 是在nodemodules(本地项目中)npm包， 模块
const _ = require('lodash')
const arr = [1,2,[3,4],[5,[6,7]]];
let demo = _.flattenDeep(arr)
console.log(demo)
console.log(arr)
console.log(_.uniq([1,2,2,2,3,3,4,5,666,666,3]))
