function findMaxK(nums: number[]): number {
  let found: Set<number> = new Set<number>(),
    max: number = -1;
  for (let i = 0; i < nums.length; i++) {
    const absVal = Math.abs(nums[i]);
    if (absVal > max) {
      if (found.has(nums[i] * -1)) max = absVal;
      else found.add(nums[i]);
    }
  }
  return max;
}
