/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
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
-1000 <= Node.val <= 1000
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root) return [];
  let ret = [];

  levelOrderHelper(root, ret, 0);
  return ret.reverse();
};

function levelOrderHelper(node, ret, level) {
  if(!node) return;
  if(!ret[level]) ret[level] = [node.val];
  else ret[level].push(node.val);
  levelOrderHelper(node.left, ret, level+1);
  levelOrderHelper(node.right, ret, level+1);
  return;
}

  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
 let val = new TreeNode(1, new TreeNode(2, new TreeNode(4)),  new TreeNode(3, null,  new TreeNode(5)))
 levelOrderBottom(val);
// [1,2,3,4,null,null,5]



[3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4