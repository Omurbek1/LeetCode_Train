function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0; // Left pointer to track the start of the current subarray
    let right = 0; // Right pointer to expand the current subarray

    let sum = 0; // Sum of elements in the current subarray
    let minLen = Number.MAX_SAFE_INTEGER; // Minimum length of a subarray with a sum >= target
    const n = nums.length; // Length of the input array

    while (right < n) {
        sum += nums[right]; // Expand the current subarray by including the right element
        while (sum >= target) {
            // If the sum of the current subarray is greater than or equal to the target
            minLen = Math.min(minLen, right - left + 1); // Update the minimum length
            sum -= nums[left]; // Contract the subarray from the left by excluding the left element
            left++; // Move the left pointer to the right
        }
        right++; // Move the right pointer to the right to expand the subarray
    }

    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen; // Return the minimum length
}