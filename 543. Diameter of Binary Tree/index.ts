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

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;

    let max=0;

    const dfc=(node: any) => {
        if(!node) return 0;

        let left=dfc(node.left);
        let right=dfc(node.right);
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }
    dfc(root);
    return max;
};