// Complete the countSwaps function below.
// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem
function countSwaps(a) {
    let n = a.length;
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                count++;
                swap(a, j, j + 1);
            }
        }
    }

    return count;
}

function swap(list, first, second) {
    [list[first], list[second]] = [list[second], list[first]];
}

countSwaps([6,4,1]);