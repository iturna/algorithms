//https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
debugger
var threeSum = function(nums) {
        let ret  = [];
        let map = {};
        let firstLen = nums.length;
        
        if(firstLen<3) return [];

        nums.sort((a, b) => a-b);
        
        let hash = nums.reduce(function(agg, val) {
                if(agg[val]) agg[val]++;
                else agg[val]=1;
                return agg;
        },{});
        
        nums = nums.reduce(function(agg, val) {
                if(agg.length && agg[agg.length-1]!==val) {
                        agg.push(val);
                } else if(!agg.length) agg.push(val);
                return agg;
        }, []);

        let checkRet = {};
        
        //build twosums 
        let firstNum;
        let secondNum;
        for(let i=0; i<nums.length-1; i++) {
                firstNum=nums[i];
                for(let j=i+1; j<nums.length; j++) {
                        secondNum=nums[j];
                        let key = 0-(firstNum+secondNum);
                        if(hash[key]) { //we found the match
                                if((firstNum===key?1:0)+(secondNum===key?1:0)>=hash[key]) { //eliminate itsself
                                        continue;
                                }
                                let arr = [firstNum, secondNum, key].sort((a,b)=>a-b);
                                key = arr[0]+"-"+arr[1]+"-"+arr[2];
                                if(checkRet[key]) {checkRet[key]++; continue;}
                                else checkRet[key]=1;
                                ret.push(arr);
                        }
                }
        }
        
        if(hash[0]>2) {
                ret.push([0,0,0]);
        }

        return ret;
};

threeSum([-1,0,1,0]);