var kthSmallest = function(root, k) {
    let num = [];
    var getNum = function(root) {
      if(root != null){
          getNum(root.left);
          num.push(root.val);
          getNum(root.right);
      }
    }
    getNum(root);
    return num[k-1];
};

var kthSmallest = function(root, k) {
    let num = [];
    var getNum = function(root) {
      if(root != null){
          getNum(root.left);
          num.push(root.val);
          getNum(root.right);
      }
    }
    getNum(root);
    return num[k-1];
};