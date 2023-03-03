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

const tree2str = (root: TreeNode | null): string => {
    if (!root) {
        return "";
    }
    let str = root.val.toString();
    if (root.left) {
        str += `(${tree2str(root.left)})`;
    } else if (root.right) {
        str += "()";
    }
    if (root.right) {
        str += `(${tree2str(root.right)})`;
    }
    return str;
};