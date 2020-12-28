//constructor 构造函数与普通函数的区别
function Book(isbn,name,author){
    this.isbn = isbn;
    this.name = name;
    this.author = author;
}
let theHabbit = new Book("0-395-07122-4","The Habbit","J.R.R.Tolkien");
console.log(theHabbit.isbn)//以构造器运行
