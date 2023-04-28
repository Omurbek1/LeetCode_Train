function sortArray(nums: number[]): number[] {
    let n = nums.length;
    for (var i = 0; i < n - 1; i++) {
        var min = i;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }
        let temp = nums[i];
        nums[i] = nums[min];
        nums[min] = temp;
    }
    return nums;
};