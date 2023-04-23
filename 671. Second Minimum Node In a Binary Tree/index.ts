
interface TreeNode {

    val: number
    left: TreeNode
    right: TreeNode

}


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