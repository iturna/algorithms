/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Constraints:

The number of nodes in the tree is in the range [1, 3 * 104].
-1000 <= Node.val <= 1000

 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
debugger
var maxPathSum = function(root) {
  let maxObj = {'max': Number.MIN_SAFE_INTEGER};
  maxPathSumHelper(root, '', {}, maxObj);
  return maxObj.max;
};

function maxPathSumHelper(node, key, mem, maxObj) {
  if(!node) return 0;
  key += '-' + node.val;
  if(mem[key]) return mem[key];
  let left = maxPathSumHelper(node.left, key, mem, maxObj);
  let right = maxPathSumHelper(node.right, key, mem, maxObj); 
  let self = node.val
  let all = left + right + self;
  let local =  Math.max(left+self, right+self, self, all);
  maxObj.max = Math.max(maxObj.max, local);

  return  Math.max(self, right+self, left+self);
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))); //42
// let root = new TreeNode(1, new TreeNode(-2)) //1
// let root = new TreeNode(2, new TreeNode(-1), new TreeNode(-2)) //2
// let root = new TreeNode(1, new TreeNode(2), new TreeNode(3)); //6
maxPathSum(root);