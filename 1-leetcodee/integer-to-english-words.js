/**
 * https://leetcode.com/problems/integer-to-english-words/
 * 
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if(num===0) return 'Zero';
    let map = {'1' : 'One', '2':'Two', '3':'Three', '4':'Four', '5':'Five', '6':'Six', '7':'Seven', '8':'Eight', '9': 'Nine', '11' : 'Eleven', '12':'Twelve', '13':'Thirteen', '14':'Fourteen', '15':'Fifteen', '16':'Sixteen', '17':'Seventeen', '18':'Eighteen', '19': 'Nineteen', '10' : 'Ten', '20':'Twenty', '30':'Thirty', '40':'Forty', '50':'Fifty', '60':'Sixty', '70':'Seventy', '80':'Eighty', '90': 'Ninety'};

    let str = '';
    let t = Math.floor(num/1000000000);
    if(t%1000>0) { //billions
      str += hundredResolver(t%1000, map) + ' Billion '
    }

    t = Math.floor(num/1000000);
    if(t%1000>0) { //millions
      str += hundredResolver(t%1000, map) + ' Million '
    }

    t = Math.floor(num/1000);
    if(t%1000>0) { //thousands
      str += hundredResolver(t%1000, map) + ' Thousand '
    }

    t = Math.floor(num/1);
    if(t%1000>0) { //hundreds
      str += hundredResolver(t%1000, map)
    }
    return str.trim(); 
};

function hundredResolver(num, map) {
  let str = ''
  if(num/100>=1) {
    str += map[Math.floor(num/100)] + ' Hundred' 
  }
  if(num%100<20 && num%100>10) {
    str += ' ' + map[num%100]
  } else {
    if(num%100/10>=1) {
      str += ' ' + map[Math.floor(num%100/10)*10]
    }
    if(num%10>0) {
      str += ' ' + map[num%10];
    }  
  }
 
  return str.trim();
}

// numberToWords(113)
// numberToWords(123)
// numberToWords(111123)

function tester() {
  return numberToWords(123)==="One Hundred Twenty Three"
  && numberToWords(12345)==="Twelve Thousand Three Hundred Forty Five"
  && numberToWords(1234567)==="One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
  && numberToWords(1234567891)==="One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
  && numberToWords(10)==="Ten"
  && numberToWords(100)==="One Hundred"
  && numberToWords(1000)==="One Thousand"
}

tester();