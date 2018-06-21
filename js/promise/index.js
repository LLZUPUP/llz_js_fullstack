const Promise = require('./promise.js');

// 将要执行的耗时任务
// 封装在executor，在实例化时就开始执行。

// resolve 表示函数正常执行完成以后，
// reject 表示函数执行过程中发生错误
// 形参 类型是函数
const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello');
    },1000)
    // reject('没见到人');
})

p.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})