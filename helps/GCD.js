
functaion generalizedGCD(arr)
{
    let result = arr[0];
    for(let i = 1; i < arr.length; i++)
    {
        result = gcd(arr[i], result);
        if(result === 1) return 1;
    }
    return result;
}

function gcd(a, b) {
    if(a === 0) return b;
    return gcd(b%a, a);
}

generalizedGCD([2,4]);