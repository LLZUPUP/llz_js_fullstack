- js 防抖
前端事件编程模型  window resize scroll
mouse mousedown mousemove 
keyup keydown 
频繁出发，回调如果不节制，页面被锁，卡

如果监听了onscroll事件，滚动页面的时候就会一直触发，如何让事件触发频率降低一些呢？
100毫秒执行一次