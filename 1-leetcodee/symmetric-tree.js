/**
 * https://leetcode.com/problems/symmetric-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
debugger
var isSymmetric = function(root) {
  // console.log(inOrderTraversalRecursive(root.left, [], []));
  // console.log(inOrderTraversalRecursive(root.right, [], []));
  // // return inOrderTraversal(root.left)===inOrderTraversal(root.right);    
  // return compareArrays(inOrderTraversalRecursive(root.left, [], []), inOrderTraversalRecursive(root.right, [], []));
  return compareNodes(root.left, root.right);
};

function compareNodes(left, right) {
  if(left && !right) return false;
  if(right && !left) return false;
  if(!left && !right) return true;
  if(left.val!==right.val) return false;

  let leftside = true;
  if(left.left || right.right) {
    leftside = compareNodes(left.left, right.right);
  }

  let rightside = true;
  if(left.right || right.left) {
    rightside = compareNodes(left.right, right.left);
  }

  return leftside && rightside;
} 