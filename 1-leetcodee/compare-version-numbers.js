/**
 * https://leetcode.com/problems/compare-version-numbers/
 * 
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
debugger
var compareVersion = function(version1, version2) {
  
  let array1 = version1.split('.');
  let array2 = version2.split('.');
  let index = 0;
  while(array1[index] || array2[index]) {
    let val1 = array1[index]?parseInt(array1[index]):0;
    let val2 = array2[index]?parseInt(array2[index]):0;
    if(val1>val2) return 1;
    else if(val2>val1) return -1;
    index++;
  }

  return 0;
};


// compareVersion("1.2.000000", "1.002");
// compareVersion("0.1", "1.0");
// compareVersion("1.05", "1.1");
// compareVersion("3.0.4.10","3.0.4.2");
compareVersion("3.0", "3.0")
