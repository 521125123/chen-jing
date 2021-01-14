var reg = /(\d{4})-(\d{3})-(\d{2})/;
var dateStr = '2018-043-18';
reg.test(dateStr);  //true
console.log(RegExp.$1,RegExp.$2,RegExp.$3);   