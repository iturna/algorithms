//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
debugger
var twoSum = function(numbers, target) {
  let map = {};

  for(let i=0; i<numbers.length; i++) {
    if(map[numbers[i]]!==undefined) {
      return [map[numbers[i]]+1, i+1];
    } else {
      map[target-numbers[i]] = i;
    }
  }
};

twoSum([2,7,11,15],9);
