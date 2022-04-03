/**
 * util.promisify 方法
 */
//引入 util 模块
const util = require('util');
//引入 fs 模块
const fs = require('fs');
//返回一个新的函数
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./resource/content.txt').then(value=>{
    console.log(value.toString());
});

// 在控制台写入：PS F:\Myhome\promise-b\1-Promise基本使用> node 5-util.promisify方法.js
// 输出：
    // 观书有感
    // 作者：朱熹
    // 半亩方塘一鉴开，天光云影共徘徊。
    // 问渠那得清如许？为有源头活水来。