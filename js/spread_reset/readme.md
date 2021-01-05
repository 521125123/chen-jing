 # ...es6运算符高级用法
 - spread 运算符 展开了字符串 [..word]
 - map 函数属于数组 把数组的每一项都调用一个callback,
    返回值是新的数组的这一项, 返回了一个新数组
        letter => `<span>${letter}</span>`
- join 将数组连接成一个新的数组
- 将<h2>中的"SPREADS!"变成,<span>中的SPREADS!
    ```JS
    //word.splice("");
    //"SPREADS!" [...word] 变成["S","p"]
    //map 将一个数组变成另一个数组
    console.log([...word].map(letter => `<span>${letter}</span>`))  
    //字符串模版  ${}占位符,  等待编译 
    ```
- 将<p>标签中的所有字符变成一个字符数组
    ```JS
    1. 将伪数组变成一个字符数组forEach
    const people = document.querySelectorAll('.people p');
    const arr = [];
    people.forEach(person => {
        arr.push(person)
    })
    const names = arr.map(person => person.textContent);
    console.log(names); 
    2. es6使用Array.from
    const people = Array.from(document.querySelectorAll('.people p'));
    const names = people.map(person => person.textContent);
    console.log(names);  
    ``` 
- (...)运算符运用  1.展开             