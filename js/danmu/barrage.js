window.onload = function() {
    const comments = [
        {
          "username": "veebaby",
          "avatar": "https://img3.doubanio.com/icon/u47312913-12.jpg",
          "content": "瞧你这损色"
        },
        {
          "username": "silly晗",
          "avatar": "https://img3.doubanio.com/icon/u147698249-4.jpg",
          "content": "你讲啊， 你来自哪里"
        },
        {
          "username": "幽华濯露",
          "avatar": "https://img3.doubanio.com/icon/u166072746-3.jpg",
          "content": "美国这也不好玩了吧？"
        },
        {
          "username": "别拿柯基诱惑我",
          "avatar": "https://img3.doubanio.com/icon/u145412244-65.jpg",
          "content": "站在风口浪尖，猪都会飞起来"
        },
        {
          "username": "几分",
          "avatar": "https://img3.doubanio.com/icon/u145582566-21.jpg",
          "content": "谁是英雄"
        },
        {
          "username": "Desperado",
          "avatar": "https://img1.doubanio.com/icon/u98500726-7.jpg",
          "content": "胡巴，胡巴"
        },
        {
          "username": "Fiona",
          "avatar": "https://img1.doubanio.com/icon/user_normal.jpg",
          "content": "也就是这样吧"
        },
        {
          "username": "Claire",
          "avatar": "https://img3.doubanio.com/icon/u37207877-52.jpg",
          "content": "别了，小可"
        },
        {
          "username": "芊儿",
          "avatar": "https://img1.doubanio.com/icon/u153756226-8.jpg",
          "content": "没谁了"
        },
        {
          "username": "éclair",
          "avatar": "https://img3.doubanio.com/icon/u2857306-44.jpg",
          "content": "这就是美国总统"
        },
        {
          "username": "七辻屋的馒头君",
          "avatar": "https://img3.doubanio.com/icon/u59556555-13.jpg",
          "content": "我来个去"
        },
        {
          "username": "玉河子",
          "avatar": "https://img3.doubanio.com/icon/u3157959-24.jpg",
          "content": "谁都是这样的吧"
        }
      ];
    // URL 代表着统一资源定位符
    let current = 0;
    // const COMMENTS_URL = 'https://www.easy-mock.com/mock/5aded0f4c57e6f08ff165a4d/students/comments#!method=get';
    const channelEles = document.querySelectorAll('#barrageDiv>div');
    // 流  定时器  触发器  实时
    // 拉取 fetch
    
    // 页面效果 函数的模块化
    // 一条评论的html DOM编程
    // 定时移动 setInterval 
    // 生成随机的信道channel
    
    // 放完了怎么办？
    // 流程性代码 计算机决定了我们的思考 unit 
    // 机器商 => 情商
    // 异步
    
    
    // fetch(COMMENTS_URL)
    //     .then(data => data.json())
    //     .then(data =>{
    //         console.log(data);
            showDanmu();
            
    //     })
        
    
    function showDanmu() {
        // 按顺序取出一条comment
        // 信道需要随机选择
        // append 到一个信道
        // 定时移动
        // i 顺序 数组从前到后
        // 时刻 comment json  date
        // 首 0 1.....
        // ip 访问太多 刷新
        // 肉机攻击 DDOS
        // getChannelIndex()
        // addComment(comment)
        setInterval(showComment,1100);
    }
    //返回随机的信道
    function getChannelIndex() {
        return Math.floor(Math.random()*4);
    }
    //接收一个参数，返回comment html
    function addComment (comment,index) {
        const channel = channelEles[index];
        // console.log(channel);
        // DHTML node节点，比html的好处是，node对象，
        // html只是字符串，块，字符串模版，缺点也很明显，
        // node 对象，你可以立马加时间，
        const commentBox = document.createElement('div');
        const commentImg = document.createElement('span');
        const commentText = document.createElement('span');
        // js 和 css分工的点
        commentBox.className = 'barrageDivClass';
        commentImg.className = 'barrageDivClass_img';
        commentImg.style.backgroundImage = `url(${comment.avatar})`;
        commentText.className = 'barrageDivClass_txt';
        commentText.innerText = `${comment.username}:${comment.content}`
        commentBox.appendChild(commentImg);
        commentBox.appendChild(commentText);
        commentBox.style.left = '700px';
        // console.log(channel)
        channel.appendChild(commentBox);
        setInterval(function(){
            const offset = parseInt(commentBox.style.left);
            commentBox.style.left = `${offset-3}px`
        },20);
    }
    function showComment () {
        // console.log(current);
        current++;
        if(current >= comments.length) {
            current = 0;
        }
        const comment = comments[current];
        const channelIndex = getChannelIndex();
        addComment(comment,channelIndex);    
    }
    
    
    
    
}
