/**
 Do not return anything, modify nums in-place instead.
 */

 /**
  * 
  * @param nums 
  * @returns 
  * 283. Move Zeroes
Easy
12.7K
322
Companies
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
  */
const moveZeroes=(nums: number[]): void=> {
    let index=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            const tems=nums[index];
            nums[index]=nums[i]
            nums[i]=tems;
            index++;
        }
    }
    return nums as never

};