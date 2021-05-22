//User function Template for javascript
//https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */
debugger
   function minCost(arr,n) {
        //code here
    let ret = [];
    arr.sort((a, b) => b-a);

    while(arr.length>1) {
        let arr1 = arr.pop();
        let arr2 = arr.pop();
        pushToOrdered(arr, arr1+arr2);
        console.log(arr);
        ret.push(arr1+arr2);
        console.log(ret);
    }
        
    return ret.reduce(function(agg, val) {
      agg = agg + val;
      return agg;
    },0);
  }

  function pushToOrdered(arr, val) {
    let start = 0;
    let end = arr.length-1;
    let mid = start + ((end-start)>>1);

    while(start<=end) {
      mid = start + ((end-start)>>1);
      if(start===end && arr[mid]>val) {arr.splice(mid+1, 0, val); break;}
      if(start===end && arr[mid]<=val) {arr.splice(mid, 0, val); break;}
      if(arr[mid]<val) end = mid;
      else if(arr[mid]>=val) start = mid + 1;
    }
  }

minCost([4, 2, 7, 6, 9], 5);
//minCost([4, 3, 2, 6], 4);
