
//https://www.hackerrank.com/challenges/min-max-riddle/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues

// Complete the solve function below.
function solve(arr) {
    debugger
    // solve here
    
    if(!arr || !arr.length) return 0;
    
    let index = 0;
    let stack = [];
    let ret = Array(arr.length).fill(-Infinity);
    arr = [...arr, 0];
    
    while(index < arr.length) {
        if(!stack.length || arr[stack[stack.length-1]] <= arr[index]) {
            stack.push(index++);
        } else {
            let popIndex = stack.pop();
            let lastIndex = stack[stack.length-1]; 
            let heigth = arr[popIndex];
            let calcIndex = stack.length? index-lastIndex-2 : index-1; //zero based index
            for(let i=0; i<=calcIndex; i++) {
              ret[i] = Math.max(ret[i], heigth);
            }
        }
    }
    
    // ret.reduceRight(function(agg, val,index) {
    //     if(val === -Infinity) {
    //         ret[index] = agg;
    //         return agg;
    //     }
    //     return val;
    // }, 0);
    
    return ret;
}

solve([2, 6, 1, 12]);

//solve([789168277,694294362,532144299,20472621,316665904,59654039,685958445,925819184,371690486,285650353,522515445,624800694,396417773,467681822,964079876,355847868,424895284,50621903,728094833,535436067,221600465,832169804,641711594,518285605,235027997,904664230,223080251,337085579,5125280,448775176,831453463,550142629,822686012,555190916,911857735,144603739,751265137,274554418,450666269,984349810,716998518,949717950,313190920,600769443,140712186,218387168,416515873,194487510,149671312,241556542,575727819,873823206]);