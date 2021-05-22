/*
https://www.hackerrank.com/challenges/bigger-is-greater/problem

 * Complete the 'biggerIsGreater' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING w as parameter.
 */

function biggerIsGreater(w) {
  // Write your code here

  const swap = function(left, right) {
    let arr = w.split('');
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    w = arr.join('');
  }

  const sortOther = function(start) {
    let arr = w.split('');
    w = (arr.slice(0, start + 1).concat(arr.slice(start + 1).sort())).join('');
  }
  
  for(let i=w.length-2; i>=0; i--) {
    for(let j=w.length-1; j>i; j--) {
      if(w[j]>w[i]) {
        swap(j, i);
        sortOther(i);
        return w;
      }
    }
  }

  return 'no answer';
}


// biggerIsGreater('abcd')
// biggerIsGreater('dcba')
// biggerIsGreater('dkhc'); //hcdk
// biggerIsGreater('dhck'); //dhkc
// biggerIsGreater('bb')
// biggerIsGreater('zedawdvyyfumwpupuinbdbfndyehircmylbaowuptgmw')
// biggerIsGreater('zyyxwwtrrnmlggfeb')
biggerIsGreater('ehdegnmorgafrjxvksc') //ehdegnmorgafrjxvsck

// dkhc
// hkdc
// hcdk

// String.fromCharCode(97)
// 'a'.charCodeAt()
