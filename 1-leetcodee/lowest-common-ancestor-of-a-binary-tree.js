/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
debugger
var lowestCommonAncestor = function(root, p, q) {
  let retObj = {'val': null};
  findLowest(root, p.val, q.val, retObj, {});
  return retObj.val;
};

function findLowest(node, p, q, retObj, mem) {
  if(retObj.val !== null) {return false;}
  if(!node) {
    return false;
  }
  if(mem[node.val]) return mem[node.val];

  if(((node.val === p || node.val === q) && (findLowest(node.left, p, q, retObj, mem) || findLowest(node.right, p, q, retObj, mem))) || (node.val !== p && node.val !== q) && findLowest(node.left, p, q, retObj, mem) && findLowest(node.right, p, q, retObj, mem)) {
    retObj.val = node;
    mem[node.val] = true;
    return true;
  }

  if(node.val === p || node.val === q) {
    mem[node.val] = true;
    return true;
  }

  return findLowest(node.left, p, q, retObj, mem) || findLowest(node.right, p, q, retObj, mem);
}

//[3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
let root = deserialize([3,5,1,6,2,0,8,null,null,7,4]);
let p = deserialize([5,6,2,null,null,7,4])
let q = deserialize([1,0,8])
lowestCommonAncestor(root, p, q);




function deserialize(data) {
  let array = data;
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
    if(leftVal!==null) {
      node.left = new TreeNode(leftVal);
      queue.push(node.left);
    }
    if(!linked.length) break;
    let rightVal = linked.shift();
    if(rightVal!==null) {
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
