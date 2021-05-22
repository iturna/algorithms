/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
debugger
        
        let dummy = new ListNode(0);
        let root = dummy;
        
        while(l1 && l2) {
                if(l1.val > l2.val) {
                        root.next = new ListNode(l2.val);
                        l2 = l2.next;
                } else {
                        root.next = new ListNode(l1.val);
                        l1 = l1.next;
                }
                root = root.next;
        }

        
        root.next = l1 || l2;
        
        return dummy.next;
};

var a = new ListNode(1, new ListNode(2, new ListNode(4)));
var b = new ListNode(1, new ListNode(3, new ListNode(4)));
mergeTwoLists(a, b)

