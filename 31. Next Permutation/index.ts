/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
     let i = nums.length - 2;
     while (nums[i] >= nums[i + 1]) {
         i--
        
     }
     if (i === -1) {
         nums.sort((a, b) => a - b)
         
     } else {
         nums[i]
     }
     
};