//es6 手册
class Point{
    constructor(x,y) {
        this.x=x;
        this.y=y;
    } 
    toString(){
        return "(" + this.x + "," + this.y + ")";
    }
}
//JS 里本没有类， class只是语法糖
console.log(typeof Point)