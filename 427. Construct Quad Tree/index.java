/*
// Definition for a QuadTree node.
class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;


    public Node() {
        this.val = false;
        this.isLeaf = false;
        this.topLeft = null;
        this.topRight = null;
        this.bottomLeft = null;
        this.bottomRight = null;
    }

    public Node(boolean val, boolean isLeaf) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = null;
        this.topRight = null;
        this.bottomLeft = null;
        this.bottomRight = null;
    }

    public Node(boolean val, boolean isLeaf, Node topLeft, Node topRight, Node bottomLeft, Node bottomRight) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
};
*/

class Solution {
    public Node construct(int[][] grid) {
        if(grid == null || grid.length == 0 || grid[0].length == 0){
            return null;
        }

        return dfs(grid, 0, 0, grid.length);
    }

    private Node dfs(int[][] grid, int x, int y, int len){
        if(len == 1){
            return new Node(grid[x][y] == 1, true);
        }

        Node root = new Node();
        Node tl = dfs(grid, x, y, len / 2);
        Node tr = dfs(grid, x, y + len / 2, len / 2);
        Node bl = dfs(grid, x + len / 2, y, len / 2);
        Node br = dfs(grid, x + len / 2, y + len / 2, len / 2);
        if(tl.isLeaf && tr.isLeaf && bl.isLeaf && br.isLeaf && tl.val == tr.val && tr.val == bl.val && bl.val == br.val){
            root.val = tl.val;
            root.isLeaf = true;
        }else{
            root.topLeft = tl;
            root.topRight = tr;
            root.bottomLeft = bl;
            root.bottomRight = br;
        }

        return root;
    }
}