function findMin(nums: number[]): number {
    let left=0;
    let right=nums.length-1;
    let mid=0
    while(left<right){
        mid=Math.floor((left+right)/2);
        if(nums[mid]>nums[right]){
            left=mid++
        }else{
            right=mid
        }
    }
    return nums[left]

};