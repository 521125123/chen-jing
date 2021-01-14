function arrayDiff(a, b) {
    if(a == []){
        return a;
    }else {
        for(let i=0;i<b.length;i++){
            if(a.includes(b[i])){
                a.splice(0,1);
            }
        }
    }
    return a;
}
// Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
// Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
// Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
console.log(arrayDiff([], [4,5]));
console.log(arrayDiff([3,4,6,9], [3,4]));
