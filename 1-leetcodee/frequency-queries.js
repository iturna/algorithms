
//https://www.hackerrank.com/challenges/frequency-queries/problem

// Complete the freqQuery function below.
debugger
function freqQuery(queries) {
    let map = new Map();
    let ret = [];
    
    for(let i=0; i<queries.length; i++) {
        let command = queries[i][0];
        let value = queries[i][1];
        
        if(command===1) { //insert 
            if(map.has(value)) map.set(value, map.get(value) + 1);
            else map.set(value, 1);
        } else if(command===2) { //delete element
            if(map.has(value)) {
                if(map.get(value)===1) {
                    map.delete(value);
                } else {
                    map.set(value, map.get(value) - 1);
                }
            }
        } else if(command===3) { //check frequency
            let found = false;
            for(let key of map.keys()) {
                if(map.get(key)===value) {
                    found = true;
                    break;
                }
            }
            ret.push(found?1:0);
        }
    }
    
    return ret;
}

freqQuery([
  [ 1, 5 ],  [ 1, 6 ],
  [ 3, 2 ],  [ 1, 10 ],
  [ 1, 10 ], [ 1, 6 ],
  [ 2, 5 ],  [ 3, 2 ]
]);