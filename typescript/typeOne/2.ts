// 数据是要类型化的, 
interface User {
    name: string,
    age: number,
    occupation?: string,
}
interface Amdin {
    name: string,
    age: number,
    role: string,
}
export type Person = User | Amdin;  //普通用户或管理员
// 拿着数据做一大波操作, 为了不掉链子
// export type User = {    //接口
//     name: string,
//     age: number,
//     occupation?: string,
//     role?: string
// };

// 用户表里 有的用户是role管理员
export const users: Person[] = [
    {
        name: "jjjj",
        age: 25,
        occupation: "A",
    },
    {
        name: "jjjj",
        age: 25,
        occupation: "A"
    },
    {
        name: "djj",
        age: 25,
        role: "Addd"
    },
    {
        name: "dll",
        age: 25,
        role: "夫人夫人"
    },
]
export function logPerson(user:Person) {
    // 很放心 满足User 上的定义
    console.log(`- ${user.name},${user.age}`)
    let additionalInformation: string;
    // ?  类型推导就好  js? + new Date()  int("14") 强制类型转换
    // if((<Amdin>user).role) {
    if("role" in user){
        additionalInformation = (<Amdin>user).role;
    }
    else{
        additionalInformation = (<User>user).occupation;
    }
    console.log(`- ${user.name},${user.age},${additionalInformation}`)
}
users.forEach(logPerson);