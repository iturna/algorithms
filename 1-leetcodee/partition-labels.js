/**
 * https://leetcode.com/problems/partition-labels/
 * 
 * @param {string} S
 * @return {number[]}
 * 
 * Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.
 */
debugger
var partitionLabels = function(S) {
  s=S.split('');
  if(s.length<2) return [s.length];
  let left = 0;
  let right = s.length-1;
  let lAnchor = s.length-1;
  let rAnchor = 0;
  let ret = [];

  while(s.length) {
    let lChar = s[left];
    let rChar = s[right];

    if(lChar === rChar && left < right) {
      lAnchor = Math.min(lAnchor, left);
      rAnchor = Math.max(rAnchor, right);
    } 

    if(left === right) {
      if(left === rAnchor || left >= s.length - 1) {
        cropString(ret, s, lAnchor, rAnchor);
        left = 0;
        right = s.length;
        lAnchor = s.length-1;
        rAnchor = 0;
      } else {
        left++;
        right = s.length;
      }
    }
    right--;
  }

  return ret;
};

function cropString(ret, s, lAnchor, rAnchor) {
  if(s.length === 0) return ret;
  if(rAnchor<lAnchor) lAnchor = rAnchor;
  let len1 = s.slice(0, lAnchor).length;
  let len2 = s.slice(lAnchor, rAnchor + 1).length;
  s.splice(0, rAnchor + 1);
  if(len1 > 0) ret.push(len1);
  ret.push(len2);
  return ret;
}

partitionLabels("ababcbacadefegdehijhklij");
//partitionLabels("eaaaabaaec");
//partitionLabels("caedbdedda");
//partitionLabels("vhaagbqkaq");