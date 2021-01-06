function duplicateCount(text) {
    var str = text.toLowerCase().split('').sort().join('');
    var arr = str.match(/(-)\1+/g);
    console.log(str);
    // var arr = str
}
console.log(duplicateCount('aadsdjfwuhh'));