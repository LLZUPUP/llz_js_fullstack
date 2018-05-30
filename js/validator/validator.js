// 表单验证策略
const strategies = {
    isNoneEmpty: function(value,errorMsg) {
        if(value.trim()==='') {
            return errorMsg
        }
    },
    minLength: function(value,len,errorMsg) {
        if(value.length<len) {
            return errorMsg
        }
    },
    maxlength: function() {

    },
    isMobilePhone: function(value,errorMsg) {
        if(!/1[3456789][0-9]{9}/.test(value)) {
            return errorMsg
        }
    },
    isEmail: function() {

    }
}