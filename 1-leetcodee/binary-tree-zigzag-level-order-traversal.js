/**
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
debugger
var zigzagLevelOrder = function(root) {
  if(!root) return [];
  if(root.length===1) return [root];
  
  return  bfs(root);
};

function bfs(node) {
  let queue = [];
  let values = [];
  let level = 0;

  queue.push(node);
  while(queue.length) {
    values[level] = writeToValues(queue, values);
    queue = pushNextLeves(queue, level++);
  }

  return values;
}

function writeToValues(queue) {
  let values = [];
  for(let i=0; i<queue.length; i++) {
    values.push(queue[i].val);
  }
  return values;
}

function pushNextLeves(queue, level) {
  let newQueue = [];

  while(queue.length) {
    let node = queue.pop();
    if(level%2===1) {
      if(node.left) newQueue.push(node.left);
      if(node.right) newQueue.push(node.right);
    } else {
      if(node.right) newQueue.push(node.right);
      if(node.left) newQueue.push(node.left);
    }
  }

  queue = newQueue;
  return queue;
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// var node = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
var node = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, null, new TreeNode(5)));

zigzagLevelOrder(node);