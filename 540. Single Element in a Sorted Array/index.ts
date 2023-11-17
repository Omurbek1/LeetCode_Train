function singleNonDuplicate(nums: number[]): number {

    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (mid % 2 === 1) {
            if (nums[mid] === nums[mid - 1]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (nums[mid] === nums[mid + 1]) {
                left = mid + 2;
            } else {
                right = mid;
            }
        }
    }
    return nums[left];

};