// Initialize your data structure here.
var NumArray = function(nums) {
    this.array = nums;
    this.sumCache = [0];
    // Fill cache with prefix sums
    // i.e. the sum of all elements before position i
    for (let i = 0; i < nums.length; i++) {
      this.sumCache[i + 1] = this.array[i] + this.sumCache[i];
    }
};

// Time complexity is O(1) 
// Space complexity is O(n)

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sumCache[j+1] - this.sumCache[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
