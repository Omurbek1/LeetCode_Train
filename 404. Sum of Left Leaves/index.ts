/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// @ts-ignore
function sumOfLeftLeaves(root: TreeNode | null): number {
    let sum=0
    function dfc(root) {
        if (root === null) return
        if (root.left) {
            let temp = root.left
            if (!temp.left && !temp.right) {
                sum += temp.val
            }
        }
        dfc(root.left)
        dfc(root.right)
    }
    dfc(root)
    return sum


};