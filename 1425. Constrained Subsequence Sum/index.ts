function constrainedSubsetSum(nums: number[], k: number): number {
    const dp=Array(nums.length).fill(0);
    dp[0]=nums[0];
    let max=dp[0];
    const queue=[0];
    for(let i=1;i<nums.length;i++){
        while(queue.length&&i-queue[0]>k){
            queue.shift();
        }
        dp[i]-Math.max(0,dp[queue[0]])+nums[i];
        max=Math.max(max,dp[i]);
        while(queue.length&&dp[queue[queue.length-1]]<dp[i]){
            queue.pop();
        }
    }
    return max;

};