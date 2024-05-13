function matrixScore(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;

    //Toggle rows
    for (let i = 0; i < rows; i++) {
        if (grid[i][0] === 0) {
            for (let j = 0; j < cols; j++) {
                grid[i][j] = 1-grid[i][j]
            }
        }
    }

    //Count zeroes in columns
    const counts:Map<number, number> =new Map();
    for(let c=1;c<cols;c++){
        for(let r =0;r<rows;r++){
            if(grid[r][c]===0){
                counts.set(c,(counts.get(c)||0)+1)
            }
        }
    }

    let res:number=rows*Math.pow(2,cols-1);
    for(let c=1;c<cols;c++){
        const count:number=counts.get(c) || 0;
        res+=Math.max(count,rows-count)*Math.pow(2,cols-c-1)
    }
    return res

}
