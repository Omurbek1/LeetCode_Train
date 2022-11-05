/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
     const row = {}  
     const box = {}
     const column = {}
     
     for (let i = 0; i < 9; i++){
         for (let j = 0; j < 9; j++){
             const value = board[i][j];
             if (value !== '.') {
                 const boxidX = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                 if (row[`${i}-${value}`] || column[`${j}-${value}` || box[`${boxidX}-${value}`]]) {
                     return false
                 }
                 row[`${i}-${value}`] = true
                 column[`${j}-${value}`] = true
                 box[`${boxidX}-${value}`]=true
             }
         }
     }
     return true
};