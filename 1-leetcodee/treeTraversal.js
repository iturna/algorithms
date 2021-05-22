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
  console.log(inOrderTraversalRecursive(root.left, [], []));
  console.log(inOrderTraversalRecursive(root.right, [], []));
  console.log(inOrderTraversal(root.left));
  console.log(inOrderTraversal(root.right));
};

function inOrderTraversal(root) {
  let result = [];
  let stack = [];

  while(stack.length || root) {
    while(root) {
      stack.push(root);
      root=root.left;
    }

    root = stack.pop();
    result.push(root.val);

    root = root.right;
  }

  return result;
}

function inOrderTraversalRecursive(root, stack, result) {
  stack.push(root);
  if(root.left) {
    inOrderTraversalRecursive(root.left, stack, result);
  }

  result.push(stack.pop().val);

  if(root.right) {
    inOrderTraversalRecursive(root.right, stack, result);
  }

  return result;
}

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

let param = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(3), new TreeNode(4)))

isSymmetric(param);