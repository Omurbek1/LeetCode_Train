type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
let val=init
for(let i=0;i<nums.length;i++){
    val  =fn(val,nums[i])

}
return nums.length?val:init
};