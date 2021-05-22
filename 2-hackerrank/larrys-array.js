/*
https://www.hackerrank.com/challenges/larrys-array/problem

 * Complete the 'larrysArray' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY A as parameter.
 */

function larrysArray(A) {
  // Write your code here

  const findNumberIndex = function(num, startIndex) {
    for(let i=startIndex; i<A.length; i++) {
      if(A[i]===num) {
        return i;
      }
    }
    return -1;
  }

  const rotate = function(index) {
    let arr = A.slice(index, index+3);
    arr.push(arr.shift());
    // A.splice(index, 3, ...arr);
    A = A.slice(0, index).concat(arr).concat(A.slice(index + 3, A.length))
  }

  for(let i=0; i<A.length; i++) {
    while(A[i]!==i+1) {
      let foundIndex = findNumberIndex(i+1, i+1);
      if(foundIndex-(i)>=2) {
        // console.log('first', foundIndex, i)
        rotate(foundIndex-2);
      } else if(foundIndex-(i)>=1 && A[foundIndex+1]!==undefined) {
        // console.log('second', foundIndex, i)
        rotate(foundIndex-1);
      } else {
        return 'NO';
      }
      // console.log(A)
    }
  }

  return 'YES';
}

//larrysArray([1,6,5,2,4,3]);
// larrysArray([3, 1, 2])
//larrysArray([1, 3, 4, 2])
 //larrysArray([1, 2, 3, 5, 4])

// let a = [1,6,5,2,4,3];
// let index = 1;
// a.slice(0, index).concat([5, 2, 6]).concat(a.slice(index+3, a.length))
// //1 5 2 6 4 3