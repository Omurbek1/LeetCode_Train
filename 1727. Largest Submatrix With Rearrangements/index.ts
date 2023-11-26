function largestSubmatrix(matrix: number[][]): number {
    if (!matrix.length) return 0;
    const height = matrix.length;
    const width = matrix[0].length;
    for (let column = 0; column < width; column++) {
        let consecutive = 0;
        for (let row = 0; row < height; row++) {
            if (matrix[row][column]) matrix[row][column] = ++consecutive;
            else consecutive = 0;
        }
    }
    let max = 0;
    for (let row = height - 1; row >= 0; row--) {
        if ((row + 1) * width <= max) break; // no need to check any more rows
        const arr = matrix[row].sort((a, b) => b - a);
        for (let column = 0; column < width; column++) {
            const consecutive = arr[column];
            if (width * consecutive <= max) break; // no need to keep checking this row
            max = Math.max(max, (column + 1) * consecutive);
        }
    }
    return max;
};