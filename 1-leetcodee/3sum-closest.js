//https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
debugger
var threeSumClosest = function(nums, target) {
    if(nums.length<3) return 0;

    let result = nums[0]+nums[1]+nums[nums.length-1];

    //sorting 
    nums.sort((a,b)=>a-b);

    // //distinct nums
    // nums = nums.reduce(function(agg, val) {
    //   if(agg.length || agg[agg.length-1] === val) return agg;
    //   else agg.push(val);
    // }, [])

    for(let i=0; i<nums.length-1; i++) {
      let left = i+1;
      let right = nums.length-1;
      while(left<right) {
        let sum = nums[i]+nums[left]+nums[right];
        if(sum<target) { left++
        } else { right-- }

        if(Math.abs(sum-target) < Math.abs(result-target)) {
          result = sum;
        }
      }

 
    }

    return result;

};

threeSumClosest([1,2,5,10,11], 12);