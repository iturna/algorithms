/**
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
debugger
var serialize = function(root) {
  if(!root) return '';
  let linked = new LinkedList();
  linked.push(root);
  let retArray = [];

  while(linked.length) {
    let node = linked.shift();

    if(!node) retArray.push('null');
    else {
      retArray.push(node.val);
      linked.push(node.left);
      linked.push(node.right);
    }
  }
  return retArray.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if(data.length===0) return null;
  let array = data.split(',');
  let linked = new LinkedList();
  for(let i=0; i<array.length; i++) {
    linked.push(array[i]);
  }
  array = null;

  let root = new TreeNode(linked.shift());
  let queue = [root]; 

  while(linked.length) {
    if(!linked.length) break;
    let leftVal = linked.shift();
    let node = queue.shift();
    if(leftVal!=='null') {
      node.left = new TreeNode(leftVal);
      queue.push(node.left);
    }
    if(!linked.length) break;
    let rightVal = linked.shift();
    if(rightVal!=='null') {
      node.right = new TreeNode(rightVal);
      queue.push(node.right);
    }
  }

  return root;
};

function LinkedList() {
  this.length = 0;
  this.head = new LinkedNode('head');
  this.tail = new LinkedNode('tail');
  this.head.next = this.tail;
  this.tail.prev = this.head;

  this.push = function(val) {
    let node = new LinkedNode(val);
    let prev = this.tail.prev;
    prev.next = node;
    node.next = this.tail;
    node.prev = prev;
    this.tail.prev = node;
    this.length++;
  }

  this.shift = function() {
    let next = this.head.next;
    this.head.next = next.next;
    next.next.prev = this.head;
    next.next = null;
    next.prev = null;
    this.length--;
    return next.val;
  }
}

function LinkedNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val,left,right) {
  this.val = val;
  this.left = left;
  this.right = right;
}




// [1,2,3,null,null,4,5]
let root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
let serie = serialize(root);
console.log(serie);
deserialize(serie);