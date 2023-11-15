function summaryRanges(nums: number[]): string[] {
    let result = [];
    let start = nums[0];
    let end = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            end = nums[i + 1];
        }
        else {
            if (start === end) {
                result.push(`${start}`);
            }
            else {
                result.push(`${start}->${end}`);
            }
            start = nums[i + 1];
            end = nums[i + 1];
        }
    }
    return result;

};