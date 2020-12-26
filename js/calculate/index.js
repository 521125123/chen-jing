//年收入？ 12*salay
//bonus 表现相关
//let calculateBonus
//const calculateBonus=(salary,level="c")=>{}
let calculateBonus  //声明 内存里
console.log(typeof calculateBonus);
calculateBonus = null;
console.log(typeof calculateBonus);
calculateBonus = "1111111"
console.log(typeof calculateBonus);
calculateBonus = 2;
console.log(typeof calculateBonus);
calculateBonus = true;
console.log(typeof calculateBonus);
/**
 * @author cmj
 * @date 20-12
 * @function 恭喜计算
 * @param {salary:number,level:string}
 * @return 总工资 number
 */
calculateBonus=(salary,level="C")=>{
    if(level==="S"){
        return salary*12;
    }
    if(level=="A"){
        return salary*13;
    }
    if(level=="B"){
        return salary*14;
    }
    if(level=="C"){
        return salary*15;
    }
}
console.log(typeof calculateBonus);
console.log(calculateBonus(22000,'S'));
console.log(calculateBonus(22000,'A'));
console.log(calculateBonus(22000));
console.log(typeof [1,2,3]);

