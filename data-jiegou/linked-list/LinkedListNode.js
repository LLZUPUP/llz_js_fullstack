// 链表结点
// [] 数组怎么运行？  内存分配给我们一定数量的空间(一次性向内存申请一定数量空间)
// 存储空间的连续性问题   数据挨着存储  灵活性不够

// 要让数据存储在不同地方 用指针定位
// a[10] = [1,2,3,4,5,6,7,8];
// 连续地址
// 1001
// 1002
// 1003
// 1004
// ...

// 1 value  1001
// 1.next 指针，next指向下一个结点的位置 = 101
// 101 10002

export default class LinkedListNode {
  // data collections data node
  // linked 
  // list 
  constructor(value, next = null) {
      this.value = value;
      this.next = next;
  }

  toString(callback) {
      return callback? callback(this.value) : `${this.value}`;
  }
}