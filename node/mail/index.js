// require 关键字， 引入库
// const fs = require('fs');//文件系统 内置模块
const nodemailer = require('nodemailer'); // 第三方库， 安装的
const {default:Axios} = require('axios');
const schedule = require('node-schedule');
// 模块 语法 -> 函数模块化  -> module (水电工、木工、..)
// 现代语言中， 一个文件就是一个模块 ....
// const modA = require('./a.js'); // 相对地址
// console.log(modA.add(1,2));
// fs.readFile('./readme.md', function(err, res) {
//   if (err) {
//     throw new Error(err);
//   }
//   console.log(res.toString());
// })
// async + await 
// 异步函数 
// 把土味的情话 
function getHoneyedWords() {
    const url = 'https://chp.shadiao.app/api.php';
    return Axios.get(url);//接口会调用不同的土味情话
}
// 把发邮件这件事， 封装给一个函数

async function sendMail(words) {
  let user = "3121208981@qq.com"
  let pass = "lacaqyoogzmrddci"; //  授权码
  let to = "1376490159@qq.com";
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: pass
    }
  });
  let info = await transporter.sendMail({
    from: `沉木造景<${user}>`, // sender address
    to: `谢小子<${to}>`,
    subject: "元旦的一封信",
    text: words
  })
  console.log("发送成功");
}

//sendMail();
schedule.scheduleJob({hour:12,minute:51}, function(){
    console.log("启动任务:"+new Date());
    getHoneyedWords()
    .then(res =>{
        sendMail(res.data);
        // console.log(res.data);
    })
})