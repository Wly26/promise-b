/**
 * 只能在node环境中的终端中，运行
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数:  path  文件路径
 * 返回:  promise 对象
 */
function mineReadFile(path){
    return new Promise((resolve, reject) => {
        //读取文件
        require('fs').readFile(path, (err, data) =>{
            //判断
            if(err) reject(err);
            //成功
            resolve(data);
        });
    });
}

mineReadFile('./resource/content.txt')
.then(value=>{
    //输出文件内容
    console.log(value.toString());
}, reason=>{
    console.log(reason);
});

// 在控制台写入：PS F:\Myhome\promise-b\1-Promise基本使用> node 4-Promise封装练习-fs模块.js
// 输出：
    // 观书有感
    // 作者：朱熹
    // 半亩方塘一鉴开，天光云影共徘徊。
    // 问渠那得清如许？为有源头活水来。