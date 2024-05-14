function getMaximumGold(grid: number[][]): number {
  let maxGold = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] > 0) {
        dfs(grid, i, j, 0);
      }
    }
  }
  function dfs  (
    grid: number[][],
    row: number,
    col: number,
    currentGold: number
  )  {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === 0
    )
      return;

    currentGold += grid[row][col];
    maxGold = Math.max(maxGold, currentGold);
    maxGold = Math.max(maxGold, currentGold);

    const temp = grid[row][col];
    grid[row][col] = 0;

    dfs(grid, row - 1, col, currentGold);
    dfs(grid, row + 1, col, currentGold);
    dfs(grid, row, col - 1, currentGold);
    dfs(grid, row, col + 1, currentGold);

    grid[row][col] = temp;
  };
  return maxGold;
}
