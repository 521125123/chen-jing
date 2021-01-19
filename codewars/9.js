function nbYear(p0, percent, aug, p) {
    // your code
    var count = 0;//计数器
    while (p0 < p){
        ++count;
        p0 = p0 + p0*(percent/100) + aug;
    }
    return count;
}
// Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
// Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
// Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
console.log(nbYear(1500, 5, 100, 5000));
