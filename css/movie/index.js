window.onscroll = function() {
    var scrollTop=document.documentElement.scrollTop+document.body.scrollTop;
    var clientHeight = document.documentElement.clientHeight;
    var scrollHeight = document.body.clientHeight;
    if(scrollTop+clientHeight==scrollHeight){
        var app = document.querySelector("#app");
        var list = document.querySelector("#list");
        cloneList = list.cloneNode(true);
        app.appendChild(cloneList);
    }
}