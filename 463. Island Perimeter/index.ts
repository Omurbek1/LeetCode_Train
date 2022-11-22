function islandPerimeter(grid: number[][]): number {
    var island = 0,
    nei = 0,
    m = grid.length,
    n = grid[0].length;
    
for(var i = 0; i < m; i++){
    for(var j = 0; j < n; j++){
        if(grid[i][j] == 1){
            island++; 
            
            if(i+1 < m && grid[i+1][j] == 1)nei++;
            
            if(j+1 < n && grid[i][j+1] == 1)nei++;
        }
    }
}
return island * 4 - nei * 2
};