/**
 * https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 * 
 * Constraints:
n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.
 */
var missingNumber = function(nums) {
    let n=nums.length;
    let map=nums.reduce(function(agg, val){
      if(!agg[val]) agg[val]=1;
      return agg;
    }, {});

    for(let i=0; i<=n; i++) {
      if(!map[i]) return i;
    }

    return '';
};

missingNumber([9,6,4,2,3,5,7,0,1]);