/**
 * https://leetcode.com/problems/min-stack/
 * 
 * initialize your data structure here.
 */

debugger
var MinStack = function() {
    this.stack = [];
    this.sortedList = new LinkedList(-Infinity);
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    insertProgresses(this.sortedList, val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if(this.stack.length===0) return null;
  let val = this.stack.pop();
  removeProgresses(this.sortedList, val);
  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if(this.sortedList.next)
    return this.sortedList.next.val;
  return null;
};

class LinkedList {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

function insertProgresses(list, val) {
  let newNode = new LinkedList(val);
  let node = list;
  while(node) {
    if(val >= node.val && !node.next) {
      node.next = newNode;
      return;
    } else if(val >= node.val && node.next && val <= node.next.val) {
      [newNode.next, node.next]=[node.next, newNode];
      return;
    } else if(val >= node.val && node.next && val > node.next.val) {
      node = node.next;
    }
  } 
}

function removeProgresses(list, val) {
  let node = list;
  while(node) {
    if(node.next && node.next.val===val) {
      let nodeToRemove = node.next;
      [node.next, nodeToRemove.next]=[node.next.next, undefined];
      return;
    }
    node=node.next;
  }
}

let stack = new MinStack();
stack.push(2);
stack.push(0);
stack.push(3);
stack.push(0);
stack.getMin();
stack.pop();
stack.getMin();
stack.pop();
stack.getMin();
stack.pop();
stack.getMin();

// ["MinStack","push","push","push","push","getMin","pop","getMin","pop","getMin","pop","getMin"]
// [[],[2],[0],[3],[0],[],[],[],[],[],[],[]]


/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */