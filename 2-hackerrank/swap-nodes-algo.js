// https://www.hackerrank.com/challenges/swap-nodes-algo/problem
function swapNodes(indexes, queries) {
    debugger

    let root = new TreeNode(1);
    let index = 0;
   
    let queue = [];
    queue.push(root); 

    while(index < indexes.length) {
      let node = queue.shift();

      if(indexes[index][0] !== -1) { //left node exists
        node.left = new TreeNode(indexes[index][0]);
        queue.push(node.left);
      }

      if(indexes[index][1] !== -1) { //right node exists
        node.right = new TreeNode(indexes[index][1]);
        queue.push(node.right);
      }

      index++;
    }
    
    let retArray = [];
    for(let i = 0; i < queries.length; i++) {
      let queryNodes = [];
      findParentNodeOfDepthTimes(root, queries[i], 1, queryNodes);

      for(let j = 0; j < queryNodes.length; j++) {
        swap(queryNodes[j]);
      }
      retArray.push(printInOrderTraversal(root));
    }

    return retArray;
}

function findParentNodeOfDepthTimes(node, depth, current, queue) {
    if(!node) { return; }
    if(current%depth===0) {
      queue.push(node);
    } 
    ++current;
    findParentNodeOfDepthTimes(node.left, depth, current, queue);
    findParentNodeOfDepthTimes(node.right, depth, current, queue);
}

function printInOrderTraversal(root){
  let queue = [];
  inOrderTraversal(root, queue);
  // console.log(...queue);
  return queue;
}

function inOrderTraversal(node, queue) {
  if(node.left) {
    inOrderTraversal(node.left, queue)
  }

  //inorder
  queue.push(node.value);

  if(node.right) {
    inOrderTraversal(node.right, queue);
  }
}

function swap(node) {
  [node.left, node.right] = [node.right, node.left];
}

function TreeNode(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

swapNodes([ [ 2, 3 ],
  [ 4, -1 ],
  [ 5, -1 ],
  [ 6, -1 ],
  [ 7, 8 ],
  [ -1, 9 ],
  [ -1, -1 ],
  [ 10, 11 ],
  [ -1, -1 ],
  [ -1, -1 ],
  [ -1, -1 ] ], [ 2, 4 ]);

// swapNodes([[ 2, 3 ], [ -1, -1 ], [ -1, -1 ] ], [1,1]);