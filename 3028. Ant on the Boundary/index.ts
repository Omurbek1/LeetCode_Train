function returnToBoundaryCount(nums: number[]): number {
  let res = 0;
  let sum = 0;
  for (let num of nums) {
    sum += num;
    if (sum === 0) res++;
  }
  return res;
}
