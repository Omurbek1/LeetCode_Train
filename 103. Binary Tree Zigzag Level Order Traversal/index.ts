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
 * 
 * 103. Binary Tree Zigzag Level Order Traversal
Medium
8.3K
220
Companies
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
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