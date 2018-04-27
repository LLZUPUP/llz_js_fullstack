// console.log('工厂模式');
// 函数属于 对象
// 如果我们这个类简单的只有一个构造函数

// 类和函数没有区别

// js 本身并没有类，只是用的人多了，给了这个实现。

// js里面其实只有对象 Object原型对象的始祖

// 原型 prototype 
// js 不需要传统继承，只要有个参照物就可以实现原型式继承
var Bicycle= function() {
    // 构造函数 constructor
    // 在new的时候执行，
    // this.brand = brand || '凤凰';
}
// 原型    凤凰。。
// 二维码
// 手机支付
// js 继承关系，不是
// 共享单车，完全颠覆了自行车，
Bicycle.prototype = {
    sellBicycle: function(model) {
        var bicycle = null;
        switch(model){
            case "Giant":
            bicycle= new Giant();
            break;
            case "Speedstar":
            bicycle=new Speedstar();
            break;
            case "Youto":
            bicycle = new Youto();
            break;
        }
        // console.log('卖车了..');
        // return null;
        // 面向对象们
        // 卖车，要有商店，车，维修人员，仓库人员，
        bicycle.assemble();
        bicycle.wash();
        bicycle.provideRepair();
        return bicycle

    }
}
function Speedstar(){

}
Speedstar.prototype = {
    assemble: function(){
        console.log('组装完成');
    },
    wash: function(){
        console.log('清洗完成');
    },
    provideRepair: function(){
        console.log('保修一年');
    }
}

function Giant() {

}
Giant.prototype = {
    assemble: function(){
        console.log('组装完成');
    },
    wash: function(){
        console.log('清洗完成');
    },
    provideRepair: function(){
        console.log('保修一年');
    }
}
function Youto() {

}
Youto.prototype = {
    assemble: function(){
        console.log('组装完成');
    },
    wash: function(){
        console.log('清洗完成');
    },
    provideRepair: function(){
        console.log('保修一年');
    }
}
var bicycle = new Bicycle();

// js基本类型
// 字符串，数值，布尔值，null，undefined。
// 复杂类型：object <-prototype array function json 

// 雷速达


console.log(bicycle.sellBicycle('Speedstar'));