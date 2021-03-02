// 数据是有范围 (2^53)-1
// bigInt
// 高精度的时间戳， MySQL id 大数据的流行
const theBiggesInt = 9007199254740991n;
// console.log(typeof theBiggesInt);
const alsoHuge = BigInt(9007199254740991);

const b1 = BigInt(Number.MAX_SAFE_INTEGER);
console.log(b1);
console.log(BigInt(Number.MIN_SAFE_INTEGER));

const maxPlusOne = b1 +1n;
console.log(maxPlusOne);
// console.log(theBiggesInt);