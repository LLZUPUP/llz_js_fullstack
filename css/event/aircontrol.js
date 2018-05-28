const TV = {
    open: function() {
        console.log('打开电视');
    },
    close: function() {
        console.log('关闭电视');
    }
}

const AirConditional = {
    // 统一的接口
    open: function() {
        console.log('打开空调');
    },
    close: function() {
        console.log('关闭空调');
    }
}

function setCommand(obj) {
    const o = {};
    if('open' in obj) {
        o.execute = obj.open;
    }
    return o;
}
const TVsetCommand = setCommand(TV);
TVsetCommand.execute();