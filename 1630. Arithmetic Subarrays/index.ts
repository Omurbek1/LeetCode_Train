function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    return l.map((start,index)=>isArithmeticSequence(nums.slice(start,r[index]+1)))
};

const isArithmeticSequence = (nums) => {
    const min=Math.min(...nums)
    const max=Math.max(...nums)
    const step=(max-min)/(nums.length-1)
    const set=new Set(nums)
    return nums.every((_,i)=>set.has(min+step*i))
}