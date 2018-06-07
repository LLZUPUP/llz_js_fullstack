function Person(name) {
    this.name = name
}

Person.prototype = {
    getName: function() {
        return this.name;
    }
}

function Author(name,books) {
    Person.call(this,name);
    this.books = books;
}

extend(Author,Person);
Author.prototype.getBooks = function() {
    return this.books;
}
function extend(subClass,superClass) {
    // var F = function() {}
    subClass.prototype = new superClass();
    subClass.prototype.constructor = subClass;
}
const author = new Author('高尔基',['我的offer']);
console.log(author.getName())

const person = new Person('周杰伦');
console.log(person.getName());
// new Person()