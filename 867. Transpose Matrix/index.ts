function transpose(matrix: number[][]): number[][] {
    const result=[]
    for(let i=0;i<matrix[0].length;i++){
       result.push([])
       for(let j=0;j<matrix.length;j++){
        result[i].push(matrix[j][i])
       }
    }
    return result
};