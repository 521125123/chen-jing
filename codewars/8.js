
function friend(friends){
    //your code here
    var fname = Array();
    for(let i=0;i<friends.length;i++){
      if(friends[i].length == 4){
        fname.push(friends[i]);
      }
    }
    return fname;
  }
// Test.assertSimilar(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
// Test.assertSimilar(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
// Test.assertSimilar(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
// Test.assertSimilar(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));