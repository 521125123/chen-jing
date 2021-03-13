/**
 * @param {number[]} postorder
 * @return {boolean}
 */
 var verifyPostorder1 = function(postorder) {
    let len = postorder.length;
    if(len <2) return true; // 只有一个元素必为后序遍历
    let root = postorder[len-1];// 后序遍历的最后一个元素为根节点
    let i = 0;
    for(;i < len -1; i++) {
        if(postorder[i] > root){// 即为root 的右子树
            break;
        }
    }
    // 判断左子树是否都小于root
    let result = postorder.slice(i, len - 1).every(item => item > root);
    if(result){ // 进行递归, 判断root的左右子树是否满足二叉树的性质。
        return verifyPostorder(postorder.slice(0,i)) && verifyPostorder(postorder.slice(i,len-1))
    }
    else {
        return false;
    }
};
var verifyPostorder = function(postorder) {
    
};
// 后序遍历定义： [ 左子树 | 右子树 | 根节点 ] ，即遍历顺序为 “左、右、根” 。
// 二叉搜索树定义： 左子树中所有节点的值 < 根节点的值；右子树中所有节点的值 > 根节点的值；其左、右子树也分别为二叉搜索树。

console.log(verifyPostorder([1,3,2,6,5]));