class Book{
    constructor(isbn,title,author){
        this.isbn=isbn;
        this.title=title;
        this.author=author;
    }
    display(){
        return `
            ISBN号:${this.isbn}
            Title:${this.title}
            Authoe:${this.author}
        `
    }
}
const jsDontKonw = new Book('111','aa','bb');
console.log(jsDontKonw.hasOwnProperty('display'));
//找到原型对象 
//Book.prototype.display =>{}
Book.prototype = {
    display:() =>{},
    sell:() =>{}
}
console.log(jsDontKonw.__proto__ ==Book.prototype);
//火车头和车身之间有什么关系
console.log(jsDontKonw.constructor == Book == Book.prototype.constructor);
//基于原型的面向对象
//封装、继承、多态
console.log(jsDontKonw.__proto__ ==Book.prototype);
console.log(jsDontKonw.hasOwnProperty('title'));
console.log(jsDontKonw.hasOwnProperty('display'));
console.log(jsDontKonw.__proto__.__proto__.__proto__);
console.log(Book.prototype.isPrototypeOf(jsDontKonw));
console.log("display" in jsDontKonw);