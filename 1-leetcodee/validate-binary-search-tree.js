/**
 * https://leetcode.com/problems/validate-binary-search-tree/
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
 * @return {boolean}
 */

function isValidBST(root) {
  let stack = [];
  let left_child_val = Number.MAX_SAFE_INTEGER;

  while(!stack.length || root) {
    while(root) {
      stack.push(root);
      root = root.left;
    }

    root = stack[stack.length-1];
    if(root.val <= left_child_val) return false;
    left_child_val = root.val;
    root = root.right;
  }
  return true;
}



        //     5
        //   3   7
        // 1  4 6  9

// function isValidBST(root) {
//   return TraverseInOrder(root, []);
// }

// function TraverseInOrder(node, list) {
//   if(node.left) {
//           TraverseInOrder(node.left, list);
//   }

//   list.push(node.val);
//   if(list.length > 2 && list[list.length-2] > list[list.length-1]) {return false; }

//   if(node.right){
//           TraverseInOrder(node.right, list);
//   }

//   console.log(list);
//   return true;
// }

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var tree = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
isValidBST(tree);