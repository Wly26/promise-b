//
const fs = require('fs');

//回调函数 形式
// fs.readFile('./resource/content.txt', (err, data) => {
//     // 如果出错 则抛出错误
//     if(err)  throw err;
//     //输出文件内容
//     console.log(data.toString());
// });



//Promise 形式
let p = new Promise((resolve , reject) => {
    fs.readFile('./resource/content.txt', (err, data) => {
        //如果出错
        if(err) reject(err);
        //如果成功
        resolve(data);
    });
});

//调用 then 
p.then((value)=>{
    console.log(value.toString());
}, (reason)=>{
    console.log(reason);
});


// 在控制台写入：PS F:\Myhome\promise-b\1-Promise基本使用> node 2-Promise实践练习-fs模块.js
// 输出：
    // 观书有感
    // 作者：朱熹
    // 半亩方塘一鉴开，天光云影共徘徊。
    // 问渠那得清如许？为有源头活水来。