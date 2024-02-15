function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    let remain = sum - nums[i];
    if (remain > nums[i]) {
      return sum;
    } else {
      sum -= nums[i];
    }
  }
  return -1;
}
