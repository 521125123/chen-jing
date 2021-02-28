// 山月老师的面试, 每天刷几道
// interface 接口 type自定义类型  ts的基础

export type User = {
    name: string,
    age: number,
    occupation: string
};    // ts 类型的约束， 每个元素，满足

export const users: User[] = [
    {
        name: "jjjj",
        age: 25,
        occupation: "A"
    },
    {
        name: "jjjj",
        age: 25,
        occupation: "A"
    }
]

export function logPerson(user:User) {
    // 很放心 满足User 上的定义
    console.log(`- ${user.name},${user.age}`)
}
console.log("Users:");
users.forEach(logPerson);