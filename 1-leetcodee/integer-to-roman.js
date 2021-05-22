/**
 * https://leetcode.com/problems/integer-to-roman/
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
        
        let map1 = {"0":"", "1": "I","2": "II","3": "III", "4": "IV", "5": "V", "6": "VI", "7": "VII", "8": "VIII", "9" : "IX"}
        let map10 = {"0":"", "1": "X","2": "XX","3": "XXX", "4": "XL", "5": "L", "6": "LX", "7": "LXX", "8": "LXXX", "9" : "XC"}
        let map100 = {"0":"", "1": "C","2": "CC","3": "CCC", "4": "CD", "5": "D", "6": "DC", "7": "DCC", "8": "DCCC", "9" : "CM"}
        let map1000 = {"0":"", "1": "M","2": "MM","3": "MMM"}
        
        return map1000[Math.floor(num%10000/1000)]+map100[Math.floor(num%1000/100)]+map10[Math.floor(num%100/10)]+map1[num%10]
};
        
        
intToRoman(58);        