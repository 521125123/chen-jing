/**
 * @author cmj
 * @param {*} {any} o 
 * @param {*} {string} type
 * @return boolean 
 */
const isTypeof =(o,type) =>{
    if(["number","boolean","function","string"].indexOf(type)>0){
        return typeof o ===type;
    }
    else{
        return(Object.prototype.toString.call(o).toLowerCase().indexOf(type)>0);
    }
}
    // 打补丁
//     if(typeof o ===type)
//         return  typeof o === type;     //number string...
//     else
//     {
//         console.log(Object.prototype.toString.call(o));
//     }
//         //console.log("对象")

// }
// null   array 是有问题的
// let a=()=>{};
// console.log(isTypeof(a,"arrry"));
// let a ="hello";
// console.log(isTypeof(a,"string"));
// let a ;
// console.log(isTypeof(a,"undefined"));
let a =null;//宁缺
console.log(isTypeof(a,"null"));