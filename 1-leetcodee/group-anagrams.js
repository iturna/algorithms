/**
 * https://leetcode.com/problems/group-anagrams/
 * 
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.

 */
debugger
var groupAnagrams = function(strs) {
  let map = {};

  for(let i=0; i<strs.length; i++) {
    let str = strs[i];
    let sorted = str.split('').sort().join('');

    if(!map[sorted]) {
      map[sorted] = [str];
    } else {
      map[sorted].push(str);
    }
  }

  let ret = [];
  for(let key in map) {
    ret.push(map[key]); 
  }
  return ret;
};


/*
var groupAnagrams = function(strs) {
  if(strs.length===1) return [strs];
  let retArray = [];
  let cacheArray = [];

  for(let i=0; i<strs.length; i++) {
    checkAndAddArray(cacheArray, retArray, ' ' + strs[i]);
  }
  return retArray;
};

function checkAndAddArray(cacheArray, array, str) {
  let findCharAtCache = false;
  for(let i=0; i<cacheArray.length; i++) {
    if(str.length !== cacheArray[i][1]) continue;
    let clonedObject = Object.assign({}, cacheArray[i][0]);
    for(let j=0; j<str.length; j++) {
      if(!clonedObject[str.charAt(j)]) {
        j=str.length;
      } else if(j==str.length-1) {//reached the last char 
        addToItemArray(array, str, i);
        return;
      } else {
        clonedObject[str.charAt(j)]--;
      }
    }
   }
   addToItemCacheAndArray(cacheArray, array, str);
}

function addToItemArray(array, str, index) {
  array[index].push(str.replace(' ', ''));
}

function addToItemCacheAndArray(cacheArray, array, str) {
  cacheArray.push([str.split('').reduce(function (agg, val) { 
    if(!agg[val]) agg[val]=1;
    else agg[val]++;
    return agg;
  }, {}), str.length]);
  array.push([str.replace(' ', '')]);
}
*/

//groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
// groupAnagrams(["ac","c"]);
 groupAnagrams(["",""]);
// groupAnagrams(["ddddddddddg","dgggggggggg"]);


