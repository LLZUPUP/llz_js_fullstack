let current = 0;
// const COMMENTS_URL = 'https://www.easy-mock.com/mock/5aded0f4c57e6f08ff165a52/students/comment';
const channelEles = document.querySelectorAll('#barrageDiv>div')
//URL 代表着统一资源定位符


// 流 定时器 触发器 实时 
// 拉取 fetch

// 页面效果 函数的模块化
// 一条评论的html  DOM 编程
// 定时移动 setInterval
// 生成随机的信道 channel
// 放完了怎么办？
// 流程性代码 计算机决定 Unit  
// 机器商 => 情商 

// .then 异步
// fetch(COMMENTS_URL)
//     .then(data => data.json())
//     .then(data => {
        showDanmu();
//     })

function showDanmu() {

    // i 顺序 数组的从前到后
    // 时刻 comment json data
    // 首 0 1..... 


    setInterval(showComment, 1100);
    // //按顺序取出一条comment

    // getChannelIndex();
    // //信道需要去随机选择

    // addComment(comment);
    // //append到一个信道

    // setInterval();
    // //定时移动
}
function showComment() {
    console.log(current);
    current++;
    if (current >= comments.length) {
        current = 0;
    }
    const comment = comments[current];
    const channelIndex = getChannelIndex();
    addComment(comment, channelIndex);
}
//返回随机的信道 四条选择其中一条
const getChannelIndex = function () {
    return Math.floor(Math.random() * 4);
}
//返回评论的html
const addComment = function (comment, index) {
    const channel = channelEles[index];
    console.log(channel);
    //console.log(channelEles[index]);
    //DHTML node 节点 ， 比html的好处是 node是对象，
    //html只是字符串 ，快，字符串模板 缺点也很明显，
    //node 对象 你可以立马加事件， 
    const commentBox = document.createElement('div');
    commentBox.className='barrageDivClass';
    const commentImg = document.createElement('span');
    const commentText = document.createElement('span');
    //js css 分工的点
    commentImg.className = 'barrageDivClass_img'
    commentImg.style.backgroundImage =
        `
    url(${comment.avatar})
    `
    commentText.className = 'barrageDivClass_txt'
    commentText.innerText = `${comment.username}:${comment.content}`

    commentBox.appendChild(commentImg);
    commentBox.appendChild(commentText);
    commentBox.style.left='700px';
    channel.appendChild(commentBox);

    setInterval(function(){
        const offset = parseInt(commentBox.style.left);
        commentBox.style.left=`${offset-3}px`;
    },20)
}  