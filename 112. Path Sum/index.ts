var hasPathSum = function(root, sum) {
    if(!root) return false
    sum -= root.val
    if(!root.right && !root.left) return !sum
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}