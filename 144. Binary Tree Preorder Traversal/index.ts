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

function preorderTraversal(root: TreeNode | null): number[] {
    const result=[];
    const stack=[];

    const pushStack=(node)=>{
        while(node!==null){
            stack.push(node as never);
            node=node.left;
        }
        pushStack(root)

        while(stack.length>0){
            const top=stack.pop();
            result.push(top.val as never);
            pushStack(top.right)
        }
        return result
    }
};