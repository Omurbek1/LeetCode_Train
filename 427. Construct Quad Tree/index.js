class Node {
    constructor(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft= topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
}

const construct = function(grid) {
   return helper(grid, 0, 0, grid.length);
};

const helper = function(grid, x, y, l) {
   if (l===1)
      return new Node(!!grid[x][y], true, null, null, null, null);
   
   const topLeft = helper(grid, x, y, l/2);
   const topRight = helper(grid, x, y+l/2, l/2);
   const bottomLeft = helper(grid, x+l/2, y, l/2);
   const bottomRight = helper(grid, x+l/2, y+l/2, l/2);
   
   if (topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf 
       && topLeft.val === topRight.val && topLeft.val === bottomLeft.val && topLeft.val === bottomRight.val) {
           return new Node(topLeft.val,true,null,null,null,null);
   }
   
   return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
};
