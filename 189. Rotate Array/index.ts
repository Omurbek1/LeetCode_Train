/**
 Do not return anything, modify nums in-place instead.
 Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 */
function rotate(nums: number[], k: number): void {

    nums.unshift(...nums.splice(-(k % nums.length), nums.length));

};