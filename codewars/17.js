function sumStrings(a,b) { 
    var res = '',
    temp = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || temp) {
        temp += ~~a.pop() + ~~b.pop();
        res = (temp % 10) + res;
        temp = temp > 9;
    }
    return res.replace(/^0+/, '');
}
console.log(sumStrings('697317585770862046667162855607', '91955854398242834505258561666'));
// String.prototype.reverse = function() {
//     return this.split('').reverse().join('');
//   }
  
//   function sumStrings(a,b) {
//     a = a.reverse(); b = b.reverse();
//     var carry = 0;
//     var index = 0;
//     var sumDigits = [];
//     while (index < a.length || index < b.length || carry != 0) {
//       var aDigit = index < a.length ? parseInt(a[index]) : 0;
//       var bDigit = index < b.length ? parseInt(b[index]) : 0;
//       var digitSum = aDigit + bDigit + carry;
//       sumDigits.push((digitSum % 10).toString());
//       carry = Math.floor(digitSum / 10);
//       index++;
//     }
//     sumDigits.reverse();
//     while (sumDigits[0] == '0') sumDigits.shift();
//     return sumDigits.join('');
//   }