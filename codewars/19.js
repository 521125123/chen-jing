function anagrams(word, words) {
    const str = word.split('').sort().join('');
    let str2 = new Array();
    for(let i = 0;i<words.length;i++){
        let str1 = words[i].split('').sort().join('');
        if(str == str1){
            str2.push(words[i]);
        }
    }
    return str2.length <= 1?[]:str2;
}
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));