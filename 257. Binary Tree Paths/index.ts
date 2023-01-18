function binaryTreePaths(root: TreeNode | null): string[] {
    let stack = [];
    let current;
    let result =[];
    
    if(!root){
        return [];
    }
    
    stack.push({
        node: root,
        path: root.val + ""
    }as never);
    
    while (stack.length > 0){
        current = stack.pop();
        
        if(current.node.left === null && current.node.right === null){
            result.push(current.path as never);
        }
            
        if(current.node.right){
            stack.push({
                node: current.node.right,
                path: current.path + "->" + current.node.right.val
            }as never);
        }
        
        if(current.node.left){
             stack.push({
                node: current.node.left,
                path: current.path + "->" + current.node.left.val
            }as never);
        }
    }
    return result;
};