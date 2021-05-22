/**
 * https://leetcode.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 * 
 * Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
 */

debugger
var merge = function(intervals) {
    if(intervals.length===0) return [];
    if(intervals.length===1) return intervals;

    intervals.sort((a, b)=> a[0]-b[0]);
    let left=0;
    let right=left+1;
    while(right<intervals.length) {
      let f=intervals[left];
      let s=intervals[right];

      if(s[0]>=f[0] && s[0]<=f[1]) {
        if(s[1]>=f[1]){
          intervals.splice(left, 2, [f[0], s[1]]);
        } else if(s[1]<f[1]) {
          intervals.splice(left, 2, [f[0], f[1]]);
        }
      } else {
        left++;
        right=left+1;
      }
    }

    return intervals;
};

merge([[1,4],[2,3]]);