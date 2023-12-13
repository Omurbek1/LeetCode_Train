function numSpecial(mat: number[][]): number {

    let count = 0;
    let row = mat.length;
    let col = mat[0].length;
    let rowSum = new Array(row).fill(0);
    let colSum = new Array(col).fill(0);
    for (let i = 0; i < row; i++) {
        rowSum[i] = mat[i].reduce((a, b) => a + b);
    }
    for (let i = 0; i < col; i++) {
        colSum[i] = mat.reduce((a, b) => a + b[i], 0);
    }
    for (let i = 0; i < row; i++) {
        if (rowSum[i] == 1) {
            for (let j = 0; j < col; j++) {
                if (mat[i][j] == 1 && colSum[j] == 1) {
                    count++;
                }
            }
        }
    }
    return count;
};