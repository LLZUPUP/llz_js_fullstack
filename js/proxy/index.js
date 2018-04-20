// 小明表白的故事
// 小明 talk in js
// js具有强大的表现力
// js还是一个弱类型语言
// 相对于java来说，java是一个静态强类型语言

// js 基础类型 字符串 数值，对象{}，array,function
// bool 布尔值  false null为空 undefined
// Symbol
// 六大基础类型   1个复杂类型
var xiaoming ={
    'name': '小明',
    'age': 21,
    hasGirlFriend: false,
    job: null,
    city: undefined
}

var xiaomei={
    'name': '小美',
    'age': 100,
    hasBoyFriend: true,
    hasHair: false,
    height: '180cm',
    weight: '200斤'
}
xiaoming.sendFlower=function(target){
    // 1 买花
    var flower = new Flower();
    if(typeof target.receiveFlower == 'function')
        target.receiveFlower(flower,this.name);
    else
        console.log('拿到名企前是不可能谈恋爱的。');


}
// 空的对象字面量
var xueba = {

}
xiaomei.receiveFlower = function(flower,name) {
        console.log('谢谢'+name+'送的'+flower.type);
}

var Flower = function(type){
    this.type = type || '玫瑰';

}

// 类 大写，对象小写
var xiaoxue={};
xiaoxue.receiveFlower=function(flower,name){
    // 实现了同样的收花方法，接口
    // 小雪跟小美都实现了同样的方法，在开发中有个概念
    // 叫做实现了相同的接口
    // 只要实现了相同的接口
    // 就可以互换对象
    // if(name='xiaoming'){
        // console.log('让我们在一起吧');
    // }else{
        // xiaomei.receiveFlower(flower,name);
    // }
    xiaomei.listenGoodMood(function(){
        xiaomei.receiveFlower(flower,name);
    })
}
// 监听好心情
/*
 *  功能：提供心情监听
 *  参数：fn 类型函数
 *  在一段时间后，心情好了，将fn执行
 */
xiaomei.listenGoodMood=function(fn){
    setTimeout(function(){
        fn();
    },10000)
    typeof fn ==='function'
    fn();
}
xiaoming.sendFlower(xueba);
xiaoming.sendFlower(xiaoxue);

