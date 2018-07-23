var foo = {
  value: 1
}

function bar() {
  console.log(this.value)
}
// bar.bind(foo, 'daisy')(44)
// bar.apply(foo)
// bar.call(foo)

Function.prototype.bind2 = function(context) {
  var self = this;
  //context
  var args = Array.prototype.slice.call(arguments, 1)
  var fNOP = function() {}
  var bound = function() {
    var bindArgs = Array.prototype.slice.call(arguments)
    self.apply(this instanceof self? this: context,args.concat(bindArgs))
  }
  fNOP.prototype = this.prototype
  bound.prototype = new fNOP()
  return bound
}
// function bar(name, age) {
//   console.log(this.value)
//   console.log(name)
//   console.log(age)
// }

function bar(name,age) {
  this.habit = 'shopping'
  console.log(this.value)
  console.log(name)
  console.log(age)
}
bar.prototype.friend = 'kevin'
var bindFoo = bar.bind(foo, 'daisy')
var obj = new bindFoo('18')
console.log(obj.habit)
console.log(obj.friend)



// bind函数执行完以后要返回一个新的函数，高阶函数 return function() {}
// this的指向？闭包