// hackerrank sertification program (intermediate question)
// 

function sortedSum(a) {    
    var currSort = [];
    var sum = 0;
    for (var i = 0; i< a.length; i++) {
        var obj = sumArr(currSort, a[i]);
        sum = sum + obj.val;
        currSort = obj.currSort;
    }
    return sum % (Math.pow(10, 9) + 7);
}
function arrangeSort(currSort, ele) {
    if (currSort.length === 0) return [ele];
    var i = 0, arr = [];
    while(currSort[i] <= ele) {
        arr.push(currSort[i]);
        i++;
    }
    arr.push(ele);
    for (var a = i; a < currSort.length; a++) {
        arr.push(currSort[a]);
    }
    return arr;
}
function sumArr(currSort, ele) {
    var currSort1 = arrangeSort(currSort, ele);
    var sum = 0;
    for (var i = 0; i < currSort1.length; i++) {
        sum = sum + (i+1) * currSort1[i];
    }
    return {
        currSort: currSort1,
        val: sum
    };
}

sortedSum([4, 3, 2, 1])
