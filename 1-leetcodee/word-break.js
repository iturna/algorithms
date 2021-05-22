/**
 * https://leetcode.com/problems/word-break/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 
 * Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
 */

debugger
var wordBreak = function(s, wordDict) {
    if(!charExists(s, wordDict)) return false;

    let dic = wordDict.reduce(function(agg, val) {
      if(!agg[val]) agg[val]=1;
      return agg;
    }, {});
    
    let dp = new Array(s.length+1).fill(false);
    dp[0]=true;

    for(let right=1; right<=s.length; right++) {
      for(let left=0; left<right; left++) {
        if(dp[left] && dic[s.slice(left, right)]) {
          dp[right]=true;
        }
      }
    }
    
    return dp[s.length];
};

function charExists(s, wordDict) {
  let map=wordDict.reduce(function(agg, val) {
    for(let i=0; i<val.length; i++) {
      if(!agg[val[i]]) agg[val[i]]=1;
      else agg[val[i]]++;
    }
    return agg;
  }, {});

  for(let i=0; i<s.length; i++) {
    if(!map[s.charAt(i)]) return false;
  }

  return true;
}


// wordBreak("leetcode", ["leet","code"]);

wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",["aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa","ba"])

// wordBreak('applepenapplea', ["apple","pen"]);

// wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]);

// var wordBreak = function(s, wordDict) {
//     let map=wordDict.reduce(function(agg, val) {
//       if(!agg[val]) agg[val]=1;
//       return agg;
//     }, {})

//     return searchWords(map, s, 0, 1);
// };

// function searchWords(map, s, left, right) {
//   while(right<=s.length) {
//     if(map[s.slice(left, right)]) {
//       if(searchWords(map, s, left, right+1)) return true;
//       left=right;
//     }
//     right++;
//   }

//   return left>=s.length;
// }

// wordBreak('applepenapple', ["apple","pen"]);

