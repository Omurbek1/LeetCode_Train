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

function findSecondMinimumValue(root: TreeNode | null): number {
    if (!root || !root.left || !root.right) {
        return -1;
    }

    let min = root.val;
    let secondMin = Number.MAX_SAFE_INTEGER;

    const traverse = (node: TreeNode) => {
        if (!node) {
            return;
        }
        if (node.val > min && node.val < secondMin) {
            secondMin = node.val;
        }
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return secondMin === Number.MAX_SAFE_INTEGER ? -1 : secondMin;
};