- 面向对象的私有属性
    this._代码编写规范，私有属性的约定
    get set 方法
    this.isbn=isbn;  数据变成了public属性,使得isbn的值可以改变
    1. 
    ```js
    this.setIsbn(isbn) 
    Book.prototype = {
    setIsbn (isbn){
        if(!this.checkIsbn(isbn)) 
            throw new Error('ISBN格式有误')

        this._isbn = isbn
    },
    getIsbn() {
        return this._isbn;
    },
    checkIsbn(isbn){
        if(!isbn) return false;
        return /\d{3}-\d-\d{3}-\d{5}-\d/.test(isbn)
    }
}```
    避免了数据变成了public属性
    要变成私有属性不能用this 但是要变成可读
    private 私有属性，对方的方法内this.调用， 但是在外界不能访问其数据
    js内不存在private ，约定， 以_开头的 就是私有属性
- 阮一峰es6手册
    ```Java
        class Point{
            toString(){

            }
        }
        Point.prototype.constructor === Point
        Point.prototype.toString
    ```
    1. JS 里本没有类， class只是语法糖，so console.log(typeof Point)返回的值是function，
        class中语法并没有什么用，而是用function 
