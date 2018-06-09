class PureFullPage {
    constructor(options) {
        this.viewHeight = window.innerHeight;
        this.pureFullPage = document.querySelector('#pureFullPage');
        this.page = document.querySelectorAll('.page');
        this.init();
    }
    init() {
        this.pureFullPage.style.height = `${this.viewHeight}px`;
        // mousewheel时间监听
        // this.scrollMouse 方法，负责滚动 执行太频繁
        // throttle 在规定时间里只执行一次
        // 重新返回一个函数，handleMouseWheel，闭包，将this.scrollMouse 封到内部 
        // this,函数执行的context
        // 1000 delay 推迟执行的时间
        const handleMouseWheel = utils.throttle(this.scrollMouse,this,1500);
        if(navigator.userAgent.toLowerCase().indexOf('firefox')===-1) {
            document.addEventListener('mousewheel',handleMouseWheel,false);
        }else {
            document.addEventListener('DOMMouseScroll',handleMouseWheel,false);
        }
    }
    // 滚轮事件处理函数
    scrollMouse(e) {
        console.log(this.pureFullPage.offsetTop)
        let viewHeight = this.viewHeight;
        let top = parseInt(getComputedStyle(this.pureFullPage,null).top);
        
        // for(let i=1;i<this.page.length;i++) {
            if(e[0].deltaY>0) {
                this.pureFullPage.style.top = (top-viewHeight)+'px'; 
            }else {
                this.pureFullPage.style.top = (top+viewHeight)+'px'; 
            }


    }
}
