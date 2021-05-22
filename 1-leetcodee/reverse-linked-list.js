/**
 * https://leetcode.com/problems/reverse-linked-list/solution/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
debugger
var reverseList = function(head) {
  let curr=head;
  let prev=null;

  while(curr) {
    [curr.next, prev, curr]=[prev, curr, curr.next];
  }

  return prev;

};


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
reverseList(head);