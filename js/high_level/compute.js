function add(a,b) {
    return a+b;
}
function multiply(a,b) {
    return a*b;
}
function minus(a,b) {
    return a-b;
}
function divide(a,b) {
    return a/b;
}
// 函数是一等对象，object
// fn 要做什么运算，传进来
// 高阶函数，函数的参数或者返回值是函数
function compute(a,b,fn) {
    return fn(a,b);
}
// 函数过去 函数名代表函数
// console.log(compute(5,8,add));
// console.log(compute(5,8,minus));

// js callback 一般叫做fn 回调函数
// 将函数作为参数

function renderUserInfo(user) {
    document.querySelector("#avatar").src = user.infos.avatar || '';
    document.querySelector("#username").innerText = user.infos.ninkname || '未命名';
}
function renderUserForm(user) {
    const oForm =document.forms['userForm'];
    const avatarInput = oForm['avatar'];
    const ninknameInput = oForm['ninkname'];
    avatarInput.value = user.infos.avatar;
    ninknameInput.value = user.infos.ninkname;
}
function getUserInfo(...fn) {
    const user_id = 100001;
    const URL = 'https://www.easy-mock.com/mock/5af03acc957fd4308a30b9d8/api/userinfo';
    fetch(URL).then(data => data.json()).then(data =>{
        // 如何做想做的其他事情？
        // fn(data);
        fn.forEach(func =>{
            func(data);
        })
        // renderUserInfo(data);
    })
}


