function maximumProduct(nums: number[]): number {

    nums.sort((a, b) => b - a);
    const n = nums.length;
    const product1 = nums[0] * nums[1] * nums[2];
    const product2 = nums[0] * nums[n - 1] * nums[n - 2];
    return Math.max(product1, product2);
};