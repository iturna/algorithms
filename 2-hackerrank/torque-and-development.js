// Complete the roadsAndLibraries function below.
// https://www.hackerrank.com/challenges/torque-and-development/problem
debugger
function roadsAndLibraries(n, c_lib, c_road, cities) {
  // console.log(n, c_lib, c_road, cities);
  let cityMap = cities.reduce(function(agg, val) {
    if(agg[val[0]]) agg[val[0]].push(val[1]);
    else agg[val[0]] = [val[1]];

    if(agg[val[1]]) agg[val[1]].push(val[0]);
    else agg[val[1]] = [val[0]];

    return agg;
  }, {});

  // console.log(cityMap);

  let visit = new Map();
  let global = new Set();
  for(let i=1; i<=n; i++) {
    makeVisit(cityMap, i, visit, global);
  }

  // console.log(global);

  let sum = 0;
  for(let set of global.values()) {
    sum += Math.min(c_road*(set.size-1)+c_lib, set.size*c_lib);
  }

  return sum;
}

function makeVisit(cityMap, i, visit, global, parentSet) {
  if(!visit.has(i)) { //not visited
    let newSet = parentSet || new Set();
    newSet.add(i);
    global.add(newSet);
    visit.set(i, newSet);
    if(cityMap[i]) { //in citymap (connected)
      for(let child of cityMap[i]) {
        makeVisit(cityMap, child, visit, global, newSet);
      }
    }
  }
}


function test() {
  return roadsAndLibraries(3, 2, 1, [ [ 1, 2 ], [ 3, 1 ], [ 2, 3 ] ]) === 4
  && roadsAndLibraries(6, 2, 5, [ [ 1, 3 ], [ 3, 4 ], [ 2, 4 ], [ 1, 2 ], [ 2, 3 ], [ 5, 6 ] ]) === 12
  && roadsAndLibraries(5, 6, 1, [[1,2], [1,3], [1,4]]) === 15
  && roadsAndLibraries(9, 91, 84, [[8,2], [2,9]]) === 805
  && roadsAndLibraries(5, 92, 23, [[ 2, 1 ], [ 5, 3 ],[ 5, 1 ], [ 3, 4 ],[ 3, 1 ], [ 5, 4 ],[ 4, 1 ], [ 5, 2 ],[ 4, 2 ]]) === 184
  && roadsAndLibraries(8, 10, 55, [ [ 6, 4 ], [ 3, 2 ], [ 7, 1 ] ]) === 80
  && roadsAndLibraries(1, 5, 3, []) === 5
  && roadsAndLibraries(2, 102, 1, []) === 204
}

test();

// roadsAndLibraries(9, 91, 84, [[8,2], [2,9]])
// roadsAndLibraries(5, 92, 23, [[ 2, 1 ], [ 5, 3 ],[ 5, 1 ], [ 3, 4 ],[ 3, 1 ], [ 5, 4 ],[ 4, 1 ], [ 5, 2 ],[ 4, 2 ]])