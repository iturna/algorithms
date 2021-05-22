/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-104 <= target <= 104

 */
debugger
var search = function(nums, target) {
    let len = nums.length;
    if(nums[0]===target) return true;
    if(nums[len-1]===target) return true;
    if(nums.length===1) return nums[0]===target;
    return searchHelper(nums, 0, len - 1, target);
};

function searchHelper(nums, start, end, target, control) {
  let control = {'found': false};

  let len = end - start;
  let mid = start + ((end - start) >> 1);

  if(nums[start]<=nums[mid] && nums[start]<=target && target<=nums[mid]) { //ordered left side and inside
    return searchOrderedHelper(nums, start, mid, target);
  } else if(nums[mid+1]<=nums[end] && nums[mid+1]<=target && target<=nums[end]) { //ordered right side an inside
    return searchOrderedHelper(nums, mid+1, end, target);
  } else { //unordered  
    if(nums[start]<=nums[mid]) { //left ordered but value at right
      return searchUnorderedHelper(nums, mid+1, end, target, control);
    } else { //value is at left side
      return searchUnorderedHelper(nums, start, mid, target, control);
    }
  }
}

function searchUnorderedHelper(nums, start, end, target, control) {
  if(control.found > -1) return control.found;

  let mid = start + ((end - start) >> 1);
  if(nums[mid]===target) {
    control.found = true;
    return control.found;
  } else if(start===end) {
    return false;
  } else {
    searchUnorderedHelper(nums, start, mid, target, control);      
    searchUnorderedHelper(nums, mid + 1, end, target, control);
  }
  
  return control.found;
}

function searchOrderedHelper(nums, start, end, target) {
  let mid = start + ((end - start) >> 1);
  
  if(nums[mid]===target) return true;
  if(start===end) return false;
  else if(nums[mid]>target) {
    return searchOrderedHelper(nums, start, mid, target);
  } else {
    return searchOrderedHelper(nums, mid+1, end, target);
  }
}
 
// search([4,5,6,7,0,1,2], 2);
// search([3,5,1], 2);
// search([1,3], 0);
// search([4,5,6,7,8,1,2,3], 8);
search([1],0);
