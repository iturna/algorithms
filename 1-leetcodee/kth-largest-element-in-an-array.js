//https://leetcode.com/problems/kth-largest-element-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
debugger
var findKthLargest = function(nums, k) {
    let array = new Array(k).fill(-Infinity);

    for(let i=0; i<nums.length; i++) {
      if(nums[i]>array[0]) {
        addToArray(array, nums[i], 0, array.length-1);
      }
    }

    return array[0];

    //nums.sort((a, b)=>b-a);
    //return nums[k-1];
};

function addToArray(arr, item, start, end) {
  let len = arr.length;
  let mid = start+Math.floor((end-start)/2);
  
  if(mid===end) {
    if(item<arr[mid]) {
      arr.splice(mid,0,item);
    } else {
      arr.splice(mid+1,0,item);
    }
    arr.shift();
    return;
  } else {
    if(item>arr[mid]) {
      addToArray(arr, item, mid+1, end);
    } else {
      addToArray(arr, item, start, mid);
    }
  }
}

findKthLargest([3,2,3,1,2,4,5,5,6],4);