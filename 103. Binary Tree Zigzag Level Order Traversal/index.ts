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
    //! 1. Строим дерево 
    if(!root) return [];
    //! 2. Строим очередь
    const result=[];
    //! 3. Строим цикл
    const queue=[root];
    //! 4. Строим счетчик
    let count=0;
    //! 5. Строим цикл

    while(queue.length){
        //! 6. Строим длину очереди
        let len=queue.length;
        //* 7. Строим условие
        if(count%2===0)result.push(queue.map(node=>node.val)) 
        //* 8. Строим условие
        else result.push(queue.map(node=>node.val).reverse());
        //* 9.счетчик
        count++;

        //* 10. Строим очередь
        while(len--){
            //* 11. Строим длину очереди
            let len2=queue.length;
            //* 12. Строим условие
            if(count%2===0)result.push(queue.map(node=>node.val)) 
            //* 13. Строим условие
            else result.push(queue.map(node=>node.val).reverse());
            //* 14.счетчик
            count++;

            //* 15. Строим очередь
            let node=queue.shift();
//             //* 16. Строим условие
            if(node.left) queue.push(node.left);
            //* 17. Строим условие
            if(node.right) queue.push(node.right);
        }
    }
    //* 18. вернуть результат
    return result

};