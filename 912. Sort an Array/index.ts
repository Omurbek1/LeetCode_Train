function sortArray(nums: number[]): number[] {
    for (let i = 1; i < nums.length; i++) {
        let value = nums[i];
        let hole = i;
        while (hole > 0 && nums[hole - 1] > value) {
            nums[hole] = nums[hole - 1];
            hole = hole - 1
        }
        nums[hole] = value;
    }
    return nums;
};