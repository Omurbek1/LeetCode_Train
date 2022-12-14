/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

 * @param board 
 * @param word 
 * @returns 
 */




function exist(board: string[][], word: string): boolean {

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] === word[0] && dfc(r, c, 0)) return true

        }
    }
    return false

    function dfc(r, c, i) {
        if (word.length === i) return true
        if (r >= board.length || r < 0 || c < 0 || c >= board[0].length || board[r][c] !== word[i]) return false
        board[r][c] = '#'
        if (dfc(r + 1, c, i + 1) || dfc(r - 1, c, i + 1) || dfc(r, c + 1, i + 1) || dfc(r, c - 1, i + 1)) return true

        board[r][c] = word[i]
    }

};