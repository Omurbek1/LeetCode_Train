function findDiagonalOrder(nums: number[][]): number[] {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            if (!map.has(i + j)) {
                map.set(i + j, []);
            } map.get(i + j).push(nums[i][j]);
        }
    }
    let result=[]
    for(let i of map.keys()){
        result.push(...map.get(i).reverse())
    }
    return result

};