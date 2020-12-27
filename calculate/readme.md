# 互联网公司的年薪
- 写代码有故事场景  逻辑能力（三 "W"）函数表达式
- const calculateBonus=(salary,level)=>{

    }，  箭头函数 
- const calculateBonus=(salary,level="c")=>{}
        或
        let calculateBonus  //声明 内存里
        calculateBonus=(salary,level="c")=>{}
        console.log(typeof calculateBonus);
- 在js 中变值或常值不需要说明，可以传一个默认值
        let a:string = "hello";
        js是弱类型语言 变量类型
- js 类型(可以在各种类型中切换)
    1. undefind 未定义 类型没有被决定
    2. string
    3. number
    4. boolean 布尔类型
    5. (null 有这种概念，但是找不到)
    以上是简单数据类型
    6. Symbol
    7. .函数 数组 对象 object
- 变量的类型由值来决定
    let function = () =>{} 优雅
- es6 函数参数可以给默认值
- === (三个等于号)除了值外， 类型也要相等
- 为什么要写注释？一是好的习惯，二是好协作
- 使用了策略模式，return strategies[level](2200);(设计模式)
    游戏时， 升级包 把策略单独的提出来
    决策者和执行人的分离，合适大型项目
    JS里用一个JSON onbject 就实现了策略模式
    1. strategies中的level是变量,如果是常量
    2. SSP(){
        return salary*20
    },
    "S":(salary) =>{
        return salary*18;
    },
- git_bush 的配置：
        1. 打开git_bush
        git config --global --replace-all user.name “你的用户名”
        git config --global --replace-all user.email “你的邮箱”
        打开Viscode 到根目录
         在终端中输入 git version
         然后git init 在网站去找code的地址
         git remote add origin（远程关联）地址
         git remote -v
         git pull origin main（拉代码）
         git checkout main
         git branch
         建文件.gitignore
