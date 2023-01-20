function findDisappearedNumbers(nums: number[]): number[] {
    const set = new Set(nums) , result = []
    for (let i = 1; i < nums.length+1; i++) { 
        if (!set.has(i)){
            result.push(i)
        }
    }
    return result
};

// [4,3,2,7,8,2,3,1]