const NumArray = function(nums: number[]) {
    let sums = 0;
    for(let i=0;i<nums.length;i++){
        sums[i]=i===0 ? nums[0]:sums[i-1]+nums[i];
    }
   this.sums=nums;

    NumArray.prototype.sumRange = function(i: number, j: number): number {
        return i===0 ? sums[j]:sums[j]-sums[i-1];
    }
   
}