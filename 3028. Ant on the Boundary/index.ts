function returnToBoundaryCount(nums: number[]): number {
    const set=new Set();
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            set.add(i)
        }else{
            set.delete(i)
        }
    }
    return set.size
}
