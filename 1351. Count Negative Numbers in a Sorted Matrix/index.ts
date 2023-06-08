function countNegatives(grid: number[][]): number {
    let countNegatives: number = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) {
                countNegatives += 1;
            }
        }
    }
    return countNegatives;

};