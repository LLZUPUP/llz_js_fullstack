// 分治
//   1. 随机选择数组中的一个数A，作为基准,中点
//   2. 其他数字跟它比较，小于它的放左边，大于它的放右边
//   3. 递归的思想，将左边的数和右边的数重得 重复以上两步


// a b c

// a.concat(b).concat(c)

// 复杂排序

const arr = [85, 24, 63, 45, 17, 31, 96, 50]

function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  let pivotIndex =  Math.floor(arr.length / 2)
  // 基准点是提成好了序的

  // 简单算法 冒泡 选择 插入 N2

  let pivot = arr.splice(pivotIndex, 1)[0];
  console.log(pivot)

  let left = []

  let right = []

  for(let i = 0;i<arr.length;i++) {
    if(arr[i]<pivot) {
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))

}
console.log(quickSort(arr))