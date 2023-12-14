function onesMinusZeros(grid: number[][]): number[][] {

    
    let onesRow = new Array(grid.length).fill(0);
    let onesCol = new Array(grid[0].length).fill(0);
    let middlCol=grid[0].length
    let newRow=grid.length

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]!=1)continue;
            onesRow[i]+=1
            onesCol[j]+=1
        }
    }

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            grid[i][j]=(2*onesRow[i])-middlCol+(2*onesCol[j])-newRow
        }
    }
    return grid
};