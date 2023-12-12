function maxProduct(nums: number[]): number {
    const sortedNums = nums.sort((a, b) => a - b);
    return (sortedNums[sortedNums.length - 1] - 1) * (sortedNums[sortedNums.length - 2] - 1);
};