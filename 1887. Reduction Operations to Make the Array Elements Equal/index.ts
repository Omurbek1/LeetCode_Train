function reductionOperations(nums: number[]): number {

    const sortedNums = nums.sort((a, b) => a - b);
  let result = 0;
  let current=0
  for(let i=1;i<sortedNums.length;i++){
    if(sortedNums[i]!==sortedNums[i-1]){
        current++
    }
    result+=current
  }
  return result

};