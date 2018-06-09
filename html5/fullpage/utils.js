const utils = {
    // 帮忙method执行的次数在规定时间内还有一次
    // method执行时，函数内的this 一定要指向我们的PureFullPage 类
    throttle(method,context,delay) {
        // args是什么
        // return 返回的函数就是等下事件执行的真正函数体
        // 产生了闭包

        let wait = false;
        return function(...args) {
            // console.log(args)
            if(!wait) {
                method.call(context,args)
                wait = true;
                setTimeout(()=> {
                    wait = false;
                },delay)
            }
            
        }
    }
}