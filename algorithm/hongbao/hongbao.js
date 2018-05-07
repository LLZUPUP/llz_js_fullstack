// es6 class 关键字新增
class RandomHongbao {
    constructor(num) {
        this.num = this.getNum(num);
        // console.log(this.num);
        // 得到一个不确定的小数的位数
        // console.log(this.num.toString().split('.')[1]);
        try {
            // 数值的小数长度
            this.multiple =
             this.num.toString().split(".")[1].length;
        }catch(e) {
            this.multiple = 0;
        }
        // 将小数放大指数倍乘我们的数，变成一个整数
        this.calcNum = this.num * Math.pow(10,this.multiple);
    }
    split(n,precision) {
        // this.num 原金额
        // this.calcNum 如果小数，就放大的金额
        // n 人数
        // 偷偷的先等分一下
        let arr = this.average(n,precision);
        // console.log(arr);
        // 随机性 三人同行为一单位，产生几次随机，把钱分给我们的左右的人，环，数据结构里面是链表
        let arrResult = arr;
        for(let i = 0;i<arrResult.length;i++) {
            let item = arr[i];
            let num =Math.floor(Math.random()*item);
            let numLeft = Math.floor(Math.random()*num);
            let numRight = num - numLeft;
            arrResult[i] -=num;
            let iLeft = i===0? (arr.length-1): i -1;
            let iRight = i===(arr.length-1)? 0: i + 1;
            arrResult[iLeft] += numLeft;
            arrResult[iRight] += numRight;
        }
        return arrResult;
    }
    average(n,precision) {
        let avg = Math.floor(this.calcNum/n);
        let rest = this.calcNum % n;
        // console.log(rest);
        let result = Array(n).fill(avg);
        // 怎么将有的rest 平分的数组里给掉 26
        // 把多的钱，1块块的去分，rest--
        // 多余的钱 填充间隔问题
        let gap = Math.round((n-rest)/rest)+1;
        let index = 0 ;
        while(rest > 0) {
            index = (--rest)* gap;
            result[index >= n ? (n-1): index]++;

        }
        // 放大后，分的平均值，回到放大前
        // 放大完的所有值，回到放大前的金额
        return result.map((item)=>{
            return (item/Math.pow(10,this.multiple));
        })
    }
    getNum(num,defaultNum = 0) {
        return this.isNumber(num)?num:defaultNum;
    }
    isNumber(num) {
        // 各种可能出问题的，排查所有的可能性
        let number = +num; //(number化)
        // console.log(number);
        if((number -num) !== 0) {
            return false;
        }
        if(number === num) {
            return true;
        }
        if(typeof num =="string") return false;
        return true;
    }
}
// 200 => 总金额
// split 分 26 总人数 红包金额的精确值为 2
const hongbao = new RandomHongbao(200);
console.log(hongbao.split(10,0));