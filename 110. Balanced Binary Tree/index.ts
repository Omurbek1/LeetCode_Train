/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
	let res = true;
    let maxDepth = (node) => {
        if (!node) return 0
        let l = maxDepth(node.left), r = maxDepth(node.right)
        if (Math.abs(l - r) > 1) res = false
        
        return 1 + Math.max(l, r)

    }
    maxDepth(root)
    return res
};
