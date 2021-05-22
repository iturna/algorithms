/**
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 * 
 * Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
 */
var maxSubArray = function(nums) {
    let localSum = -Infinity;
    let globalSum = -Infinity;

    for(let i=0; i<nums.length; i++) {
      localSum = Math.max(nums[i], localSum+nums[i]);
      globalSum = Math.max(localSum, globalSum);
    }

    return globalSum;
};

// maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
maxSubArray([5,4,-1,7,8]);