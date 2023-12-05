function searchMatrix(matrix: number[][], target: number): boolean {
    for (let i = 0; i < matrix.length; i++) {
        if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
            return matrix[i].includes(target)
        }
    }
    return false
};