  const binary = function(arr, val, left, right) {
    if(left>=right) return left;
    let mid = left + Math.floor((right-left)/2);
    if(arr[mid]===val) return mid;
    else if(arr[mid]>val) return binary(arr, val, left, mid);
    else if(arr[mid]<val) return binary(arr, val, mid+1, right);
  }

binary([1,2,4,5,6], 0, 0, 5)

function search(arr, val) {
    let right = arr.length - 1;
    let left = 0;
    let ans = null;

    while(left <= right) {
        // let mid = (right - left) / 2;
        let mid = (right - left) >> 1;

        if(arr[mid] === val) {
            ans = mid;
            break;
        } else if(val < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}
  
console.log(search([1,2,3,4,5,6] , 3));


function search(arr, val) {
    let end = arr.length - 1;
    let start = 0;
    let ans = null;
    let exact = false;

    while(start <= end) {
        // let mid = (right - left) / 2;
        let mid =  start + ((end - start) >> 1);
      console.log(start, end, mid, arr[mid])

        ans = mid;
        if(arr[mid] === val) {
          exact = true;
            break;
        } else if(arr[mid] < val) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return ans;
}

console.log(search([1,2,3,5,7,99,888] , 4));
