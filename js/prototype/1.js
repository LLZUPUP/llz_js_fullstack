var obj = {a:1};
// console.log("a" in obj)
// console.log("toString" in obj)
function hasPrototypeProperty(o,name) {
    return name in o && !o.hasOwnProperty(name)
}
// console.log(hasPrototypeProperty(obj,"toString"))

// 函数是对象 Object
// Person 可以是程序员，作曲家，作者的原型链对象
function Person(name) {
    this.name=name;
}
Person.prototype = {
    getName: function() {
        return this.name
    }
}
// var xiaoming = new Person('小明')
// console.log(xiaoming.name)
// js 原型式继承
// 要构建constructor  Person name + books 属性
// prototype Person的方法链＋方法链（自身方法）
function Author(na,books) {
    // 新的构造函数
    this.books = books;
    Person.call(this,na);
    // console.log(this)
}
// 得到Person的prototype
extend(Author,Person);
function extend(subClass,superClass) {
    // 第三者   干净
    var F = function(){}; //空的构造函数
    F.prototype = superClass.prototype;
    subClass.prototype = new F();  //得到了一个新的对象
    // console.log(subClass.prototype.constructor)
    // 会短暂的失去构造函数
    subClass.prototype.constructor = subClass;
    // console.log(subClass.prototype.constructor)

}

Author.prototype = {
    getBooks: function() {
        return this.books;
    }
}

var xiaoming = new Author('乐乐','[英雄联盟]')
// console.log(xiaoming.name)
// console.log(xiaoming.getBooks())

// 函数
// js 几乎所有的函数都有一个prototype属性
// 指针一样，指向一个对象，属性或方法的集合
// Person.prototype.getName = function() {
//     return this.name;
// }
// prototype 入口？ js 所有对象其实是由function 构造的
// 函数都有的属性


