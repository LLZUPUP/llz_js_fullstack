// console.log('合唱团')
// talk is js
// 国王，招1000只鸡组成合唱团
var choir = [];
// duck  是鸭对象
// JSON Object 
// 只要两脚站立会嘎嘎嘎叫的都是鸭子
var duck = {
    // 'name': '鸭王',
    // 'actor': '任达华'
    duckSinging: function(){
        console.log('嘎嘎嘎');
    }
}
// new 一下，json 对象，不需要new
// json 慢慢描述 也是数据交换的标准
var yyj = {
    'name': '杨玉杰',
    hasGirlFriend: false,
    birth: '5-23',
    girlAttributes: {
        isAlive: true,
        sex: 'all'
    }
} 
console.log(yyj.girlAttributes.sex);
yyj.girlAttributes.sex = 'female';
console.log(yyj.girlAttributes.sex);
var chicken={
    duckSinging: function(){
        console.log('嘎嘎嘎')
    }
}
for(var i=0;i<1000;i++){
    // choir.push(duck);
    joinChoir(duck);
}
joinChoir(chicken);
console.log(choir.length);
// choir.push(chicken);
console.log(choir);
// for(var i=0;i<choir.length;i++) {
//     var singer =choir[i];
//     console.log(singer);
//     if(!singer.duckSinging){
//         console.log('不是鸭子');
//         break;
//     }
// }

function joinChoir(ani){
    if(ani && typeof ani.duckSinging == 'function') {
        choir.push(ani);
    }else {
        console.log('不合要求');
    }
}
