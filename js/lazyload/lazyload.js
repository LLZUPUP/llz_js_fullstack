/*
 *  author llz
 *  date 2018-5-4
 */
// 服务于任何图片元素，img 幕后，再将origin_src 设置过去
 var LazyLoadImage = (function(){
    return {
        setSrc: function(ele) {
            // console.log('开始下载图片吧');
            const url = ele.getAttribute("origin_src")?
            ele.getAttribute("origin_src"):"";
            if(!url) return;
            const oImg = document.createElement("img");
            // 不会影响页面,none会离开文档流
            // opacity: 0 这个会撑长页面
            oImg.style.display = 'none';
            document.body.appendChild(oImg);
            // 异步
            oImg.onload = function() {
                ele.src = url;
                document.body.removeChild(this);
                // 不会立即执行
                // 后执行
            }
            // 先执行
            oImg.src = url;
            

        }
    }
 })();
