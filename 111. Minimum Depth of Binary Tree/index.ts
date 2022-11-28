function minDepth(root: TreeNode | null): number {

    if (root===null) return 0

    let minDepth = 1
    let queque = [root]
    
    while (queque.length) {
        let levelSize = queque.length
        while (levelSize) {
            let current = queque.shift()
            if (current.left === null && current.right === null) {
                return minDepth

            } else {
                if (current.left) queque.push(current.left)
                if(current.right) queque.push(current.right)
            }
            levelSize--
           
        }
        minDepth++
    }
    return minDepth
};