  /**
   * https://leetcode.com/problems/copy-list-with-random-pointer/
   * 
   * // Definition for a Node.
   * function Node(val, next, random) {
   *    this.val = val;
   *    this.next = next;
   *    this.random = random;
   * };
   */

  /**
   * @param {Node} head
   * @return {Node}
   */
  var copyRandomList = function(head) {
    let node = head;
    let map = new Map();

    //map new nodes
    while(node) {
      let newNode = new Node(node.val);
      map.set(node, newNode);
      node = node.next;
    }

    node = head;
    //second iteration, convert all the objects to new ones
    while(node) {
      map.get(node).next = map.get(node.next) ? map.get(node.next) : null;
      map.get(node).random = map.get(node.random) ? map.get(node.random) : null;
      node = node.next; 
    }

    return map.get(head);
  };
