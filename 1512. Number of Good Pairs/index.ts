function numIdenticalPairs(nums: number[]): number {
    
    let pairs = 0;
    let left=0;
    let right=0;

    while(left<nums.length){
       right++

       if(nums[left]===nums[right]) pairs++
       if(right===nums.length) {
           left++
           right=left
       }
    }
    return pairs

};