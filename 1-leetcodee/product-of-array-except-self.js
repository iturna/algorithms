/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * 
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up:

Could you solve it in O(n) time complexity and without using division?
Could you solve it with O(1) constant space complexity? (The output array does not count as extra space for space complexity analysis.)

 */
var productExceptSelf = function(nums) {
    let agg = 1;
    let zeroIndex = -1;
    for(let i=0; i<nums.length; i++) {
      let val = nums[i];
      if(val!==0) {
        agg*=val;
      } else {
        if(zeroIndex>-1) {
          return new Array(nums.length).fill(0);
        }
        zeroIndex = i;
      }
    }


    let outputArray;
    if(zeroIndex>-1) {
      outputArray = new Array(nums.length).fill(0);
      outputArray[zeroIndex] = agg;
      return outputArray;
    } else {
      outputArray = new Array(nums.length).fill(agg);
      for(let i=0; i<outputArray.length; i++) {
        outputArray[i] = outputArray[i]/nums[i];  
      }
      return outputArray;
    }
};

// productExceptSelf([1,2,3,4]);
productExceptSelf([-1,1,0,-3,3]);
