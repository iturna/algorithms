/**
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = (head, k) => {
  if(!head.next) return head;
  let start = head;
  let end = head;

  for(let i=0; i<k; i++) {
    end = end.next;
    if(!end) return head;
  }

  let newHead = reverse(start, end);

  start.next = reverseKGroup(end, k);

  return newHead;
};

// reverse from startNode to endNode
var reverse = (start, end) => {
 let [prev, cur] = [null, start];
 while(cur != end) [cur.next, cur, prev] = [prev, cur.next, cur.next]
 return prev;
}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var head = new ListNode(1,  new ListNode(2,  new ListNode(3,  new ListNode(4,  new ListNode(5)))));

reverseKGroup(head, 2);