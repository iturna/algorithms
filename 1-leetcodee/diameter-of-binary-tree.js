/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 
 * Constraints:

The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100
 */
var diameterOfBinaryTree = function(root) {
    return bfs(root);
};

function bfs(node) {
  let queue = [];
  queue.push(node);
  let max = 0;
  while(queue.length) {
    let curr = queue.pop();
    if(curr.left) queue.push(curr.left);
    if(curr.right) queue.push(curr.right);
    max = Math.max(max, findDepth(curr.left) + findDepth(curr.right));
  }
  return max;
}

function findDepth(node) {
  if(!node) return 0; 

  if(!node.left && !node.right) {
    return 1;
  }
  
  return 1 + Math.max(findDepth(node.left), findDepth(node.right));
}


 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

//  let node = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))
 let node = new TreeNode(1, new TreeNode(2))

diameterOfBinaryTree(node);