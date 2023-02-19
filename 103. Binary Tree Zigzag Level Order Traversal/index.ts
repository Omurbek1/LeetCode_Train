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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if(!root) return [];
    const result=[];
    const queue=[root];
    let count=0;

    while(queue.length){
        let len=queue.length;

        if(count%2===0)result.push(queue.map(node=>node.val)) 
        else result.push(queue.map(node=>node.val).reverse());
        count++;

        while(len--){
            let node=queue.shift();

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result

};