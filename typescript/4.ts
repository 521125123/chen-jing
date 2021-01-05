type IUserInfoFunc = (user:IUser) => string//自定义类型
interface IUser {//类是一个接口类
    name:string;
    age:number;
}
const getUserInfoWithType:IUserInfoFunc = (user) =>{
    return `name:${user.name},age:${user.age}`;
}
getUserInfoWithType({name:'zaza',age:12})