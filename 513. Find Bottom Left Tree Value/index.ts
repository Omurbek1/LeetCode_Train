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

function findBottomLeftValue(root: TreeNode | null): number {
  const queque = [root];
  let node;

  while (queque.length) {
    const leftmost = queque.shift();
    node = leftmost.val;
    if (leftmost.right) {
      queque.push(leftmost.right);
    }
    if (leftmost.left) {
      queque.push(leftmost.left);
    }
  }
  return node;
}
