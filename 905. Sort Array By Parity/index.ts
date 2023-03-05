function sortArrayByParity(nums: number[]): number[] {
    

    let left = 0;
    let right = nums.length - 1;

    while (left < right){
        while(left<nums.length && nums[left] % 2 === 0){
            left+=1;
        }
        while(right>-1 && nums[right] % 2 === 1){
            right-=1;
        }
        if(left<right){
            [nums[left], nums[right]] = [nums[right],nums[ left]];
            left += 1;

            right-=1;
        }
    }
    

    return nums
};