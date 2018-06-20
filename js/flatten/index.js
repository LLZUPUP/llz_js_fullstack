// 1.flattern 功能以后慢慢学
// 2.数组的一些超纲但常用，npm 包提供了这种功能
// lodash  underscore
// 3.代码的宿主环境是 命令行
//  npm init -y package.json
//  yarn add lodash
//  在当前文件中，引入node_modules下的lodash
// 使用它完成flattern 看文档
const arr = [1,2,[3,4],[5,[6,7]]];
const res = [];
// 方法一:
function parseArray(arr,res) {
    for(let i =0;i<arr.length;i++) {
        if(arr[i] instanceof Array) {
            parseArray(arr[i],res)
        }else {
            res.push(arr[i])
        }
    }
}
parseArray(arr,res)
console.log(res)


// console.log(arr.toString().split(",").map(res=>{
//     return +res;
// }))
// 方法二:
function flatten(array){
    if(!Array.isArray(array)) {
        return
    }else {
        return array.toString().split(",").map(res=>{
            return +res;
        })
    }
    
}
console.log(flatten(res))