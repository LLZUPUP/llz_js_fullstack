// function binary_search(arr, target) {
//   let begin = 0, end = arr.length-1, middle;
//   while (begin <= end) {
//     middle = parseInt((begin+end)/2);
//     if (target === arr[middle]) {
//       return middle;
//     } else if (target > arr[middle]) {
//       begin = middle + 1;
//     } else {
//       end = middle - 1;
//     }
//   }
// }
// var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,89];
// var result = binary_search(arr, 10);
// console.log(result);

function binary_search(arr, low, high, key) {
  if(low > high) {
    return -1
  }
  var mid = Math.floor((high + low)/2)
  if(arr[mid] == key) {
    return mid
  }else if(arr[mid] > key) {
    high = mid - 1;
    return binary_search(arr, low, high, key)
  }else if(arr[mid] < key) {
    low = mid +1
    return binary_search(arr, low, high, key)
  }
}


var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,89];
var result = binary_search(arr, 0, 13, 10);
console.log(result)