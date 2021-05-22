//https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(steps, path) {
  debugger
    // Write your code here
    // console.log(steps, path);
    
    const guide = {'U':1, 'D':-1}
    let total = 0;
    let valleyCount = 0;
    
    for(let i = 0; i<steps; i++) {
        if(total === 0 && guide[path[i]] < 0) {
            valleyCount++;
        }
        
        total += guide[path[i]];
    }
    
    return valleyCount;
}

countingValleys(12, "DDUUDDUDUUUD");