// Complete the countInversions function below.
// https://www.hackerrank.com/challenges/ctci-merge-sort/
debugger
function countInversions(arr) {
  let count = 0;
  let ordered = arrayDivider(arr);
  // console.log(ordered);
  return count;

  function arrayDivider(arr) {
    if(arr.length===0) return [];
    if(arr.length===1) return arr; 

    let mid = (arr.length-1)>>1;
    // console.log(arr, mid);
    let leftSide = arrayDivider(arr.slice(0, mid+1));
    let rightSide = arrayDivider(arr.slice(mid+1));

    return merge(leftSide, rightSide);
  }

  function merge(leftArray, rightArray) {
    if(!leftArray || !rightArray) {return 0}
    let left = 0;
    let right = 0;
    let leftVal = leftArray[left];
    let rightVal = rightArray[right];
    let val = new Array(leftArray.length + rightArray.length);
    let index = 0;

    while(leftVal && rightVal) {
      if(leftVal<=rightVal) {
        // val.push(leftVal);
        val[index] = leftVal;
        left++;
      } else {
        // val.push(rightVal);
        val[index] = rightVal;
        right++;
        count += leftArray.length - left;
      }
      leftVal = leftArray[left];
      rightVal = rightArray[right];

      index = left + right;
    }

    let remain = [];

    if(!rightVal && leftVal) {
      remain = leftArray.slice(left);
    } else if(rightVal && !leftVal) {
      remain = rightArray.slice(right);
    }
    
    index = 
    val.splice(index, val.length - index, ...remain);

    return val;
  }
}


function test() {
  return  countInversions([2,4,1]) === 2
  && countInversions([1,1,1,2,2]) === 0
  && countInversions([2,1,3,1,2]) === 4
}

test();

// countInversions([2,4,1])

