const NumArray = function (nums) {
  this.sums = new Array(nums.length);
  this.sums[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    this.sums[i] = this.sums[i - 1] + nums[i];
  }
};
NumArray.prototype.sumRange = function (left, right) {
  if (left === 0) {
    return this.sums[right];
  } else {
    return this.sums[right] - this.sums[left - 1];
  }
};
