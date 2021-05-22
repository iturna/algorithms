/**
 * https://leetcode.com/problems/find-median-from-data-stream/
 * Constraints:

-105 <= num <= 105
There will be at least one element in the data structure before calling findMedian.
At most 5 * 104 calls will be made to addNum and findMedian.

 * initialize your data structure here.
 */
debugger
var MedianFinder = function() {
    this.array = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.array.splice(findIndex(this.array, num, 0, this.array.length), 0, num);
};

function findIndex(array, num) {
  let len=array.length;
  if(len===0) return 0;
  if(array[0]>num) return 0;
  if(array[len-1]<num) return len;

  let start=0;
  let end=array.length-1;
  let curr=-1;

  while(start<=end) {
    let mid=start+((end-start)>>1);
    if(array[mid]>=num) {
      end=mid-1;
      curr=mid;
    } else {
      start=mid+1;
    }
  }

  return curr;
}

function calculateMedian(array) {
  let len = array.length;
  let median = 0;
  if(len%2===0) {
    median = (array[len/2]+array[len/2-1])/2;
  } else {
    median = array[Math.floor(len/2)];
  }
  console.log(array);
  return median;
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    return calculateMedian(this.array);
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

let medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
medianFinder.addNum(5);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 2.0
