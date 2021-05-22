/**
 * https://leetcode.com/problems/k-closest-points-to-origin/
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 * 
 * Constraints:

1 <= k <= points.length <= 104
-104 < xi, yi < 104
 */
debugger
var kClosest = function(points, k) {
  if(points.length===0) return [];
  if(points.length===k) return points;
  if(points.length===1) return points;
  if(k===0) return [];

  let linked = new StaticLinkedList(k);
  for(let i=0; i<points.length; i++) {
    let distance = getDistanceToOrigin(points[i]);
    linked.add(i, distance);
  }

  let ret = [];
  let keys = linked.getKeys();
  for(let i=0; i<keys.length; i++) {
    ret.push(points[keys[i]]);
  }
  return ret;
};

function getDistanceToOrigin(point) {
  let val1 = Math.abs(Math.pow(point[0], 2));
  let val2 = Math.abs(Math.pow(point[1], 2));
  return Math.sqrt(val1 + val2);
}

class StaticLinkedList {
  constructor(length) {
    this.staticLength = length;
    this.head = new Node('head', -Infinity);
    this.tail = new Node('tail', Infinity);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.length=0;
  }

  add(key, val) {
    let node = this.head;
    let newNode = new Node(key, val);
    while(node && node.next) {
      if(node.next.val>=newNode.val) {
        newNode.next = node.next;
        newNode.prev = node;
        node.next.prev = newNode;
        node.next = newNode;
        this.length++;
        if(this.length>this.staticLength) {
          let toRemove = this.tail.prev;
          this.tail.prev = toRemove.prev;
          toRemove.prev.next = this.tail;
          toRemove.next = null;
          toRemove.prev = null;
          this.length--; 
        }
        break;
      }

      node = node.next;
    }
  }

  getKeys() {
    let ret = [];
    let node = this.head.next;
    while(node.key!=='tail') {
      ret.push(node.key);
      node = node.next;
    }
    return ret;
  }
}



class Node {
  constructor(key, val, next, prev) {
    this.key = key;
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

kClosest([[1,3],[-2,2]], 1);