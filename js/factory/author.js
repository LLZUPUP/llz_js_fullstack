function Person(name) {
    this.name = name
}
Person.prototype.getName=function(){
    return this.name
}

// IT工程师
function Coder(name,languages) {
    // call?
    Person.call(this,name);
    // 父类没有的可以加
    // 语言
    this.languages = languages;
}
Coder.prototype = new Person()
Coder.prototype.construtor = Coder
Coder.prototype.getLanguages = function(){
    return this.languages;
}
// new Person 新的对象 就是Coder的原型对象
var wxf = new Person('王洗发');
console.log(wxf.name);

var xjy = new Coder('徐家园',['javascript','python','c/c++']);


console.log(xjy.name+''+xjy.languages.join(','));
console.log(xjy.getName());
console.log(xjy.getLanguages());



