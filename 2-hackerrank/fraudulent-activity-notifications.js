// Complete the activityNotifications function below.
// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem
function activityNotifications(expenditure, d) {
  debugger
    let len = expenditure.length;

    if(d >= len) return 0;
    if(d===0 || len===0) return 0;

    let notificationCount = 0;

    let array = expenditure.slice(0, d);
    let nextRemove = array[0];
    let nextAdd = expenditure[d];
    let median = findMedian(array.sort((a,b)=>a-b));

    notificationCount += addNotification(median, nextAdd);

    for(let i = 1; i < len-d; i++) {
      addAndRemove(nextAdd, nextRemove, array);
      nextAdd = expenditure[d+i];
      nextRemove = expenditure[i];
      median = findMedian(array);
      notificationCount += addNotification(median, nextAdd);
    }

    return notificationCount;
}

function addAndRemove(nextAdd, nextRemove, array) {
  removeHelper(array, 0, array.length, nextRemove);
  addHelper(array, 0, array.length, nextAdd);
}

function addHelper(array, start, end, toAdd) {
  debugger
  let mid = start+Math.floor((end-start)/2);
  if(array[mid]===toAdd) { 
    array.splice(mid,0,toAdd); 
    return;
  }

  if(start === end) {
    if(array[start] > toAdd) { //add to left
      array.splice(start, 0, toAdd);
    } else { //add to right
      array.splice(start+1, 0, toAdd);
    }

    return;
  }

  if(array[mid] > toAdd) {
    addHelper(array, start, mid, toAdd);
  } else {
    addHelper(array, mid+1, end, toAdd);
  }
}

function removeHelper(array, start, end, toRemove) {
  debugger
  let mid = start+Math.floor((end-start)/2);
  if(array[mid]===toRemove) { 
    array.splice(mid,1); 
    return;
  }

  if(array[mid] > toRemove) {
    removeHelper(array, start, mid, toRemove);
  } else {
    removeHelper(array, mid+1, end, toRemove);
  }
}

function addNotification(m, n) {
  if(m*2 <= n) return 1;
  return 0;
}

function findMedian(array) {
  let len = array.length;
  let oneItem = len%2!==0;
  let mid = Math.floor(len/2);

  if(oneItem) return array[mid];
  else return (array[mid] + array[mid-1])/2;
}

activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5);