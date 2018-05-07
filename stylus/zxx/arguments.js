function sum() {
    // let total = 0;
    // arguments.forEach(i =>{
    //     total +=i;
    // })
    // return total;
    let total = 0;
    // for(let i=0;i<arguments.length;i++) {
    //     total += arguments[i];
    // }
    // Array.from(arguments).forEach(i => {
    //     total += i;
    // })
    // return total;
    // Array.from(arguments).slice(9).forEach(i => {
    //     total += i;
    // })
    Array.from(arguments).slice(9).forEach(i => {
        return total = i;
    });
}
console.log(sum(1,2,3,4,5,6,7,8,9,10))


