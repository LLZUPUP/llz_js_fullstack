// let mySet = new Set();
const arr =[1,2,3,4,1,4,5,3];
// for(let i=0;i<arr.length;i++) {
//     mySet.add(arr[i]);
// }
// let mySet = new Set(arr);
// console.log(mySet);
function unique(arr) {
    if(!Array.isArray(arr)) {
        console.log('type error');
        return 
    }
    return Array.from(new Set(arr));
}
console.log(unique(arr));