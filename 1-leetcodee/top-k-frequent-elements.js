/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * Constraints:

1 <= nums.legth <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 */
debugger
var topKFrequent = function(nums, k) {
  let array = new LinkedArray();

  for(let i=0; i<nums.length; i++) {
    array.addOrUpdate(nums[i]);
  }

  return array.printKFrequent(k);
};

class LinkedArray {
  constructor() {
    this.head=new LinkedList('head', -Infinity, null, null);
    this.tail=new LinkedList('tail', Infinity, null, null);
    this.head.next=this.tail;
    this.tail.prev=this.head;
    this.map={};
  }

  addOrUpdate(key) {
    if(this.map[key]) {
      this.map[key].val++;
      while(this.map[key].val>=this.map[key].next.val) {
        let curr=this.map[key];
        let curr_next=this.map[key].next;
        let curr_next_next=curr.next.next;
        let curr_prev=curr.prev;
        [curr_prev.next, curr.prev, curr.next, curr_next.next, curr_next.prev, curr_next_next.prev]=[curr_next, curr_next, curr_next_next, curr, curr_prev, curr];
      }
    } else { //adding first time
      this.map[key]=new LinkedList(key, 1);
      let node=this.map[key];
      let head=this.head;
      let headnext=head.next;
      [head.next, node.prev, node.next, headnext.prev] = [node, head, headnext, node];
    }
  }

  printKFrequent(k) {
    let ret=[];
    let node=this.tail.prev;
    for(let i=0; i<k; i++) {
      ret.push(node.key);
      node=node.prev;
    }

    return ret;
  }
}

class LinkedList {
  constructor(key, val, next, prev) {
    this.key=key;
    this.val=val;
    this.next=next;
    this.prev=prev;
  }
}

topKFrequent([1,1,1,2,2,3], 2);