/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if(lists.length===1) return lists[0];
  if(lists.length===0) return null;
  let list1 = lists.shift();
  let list2 = lists.shift();
  let newList = new ListNode('root'); 
  let dummy = newList;

  while(list1 && list2) {
    if(list1.val>list2.val) {
      newList.next = list2;
      list2 = list2.next;
    } else {
      newList.next = list1;
      list1 = list1.next;
    }
    newList = newList.next;
  }

  newList.next = list1 || list2;

  lists.push(dummy.next);

  return mergeKLists(lists);
};

// [[1,4,5],[1,3,4],[2,6]]