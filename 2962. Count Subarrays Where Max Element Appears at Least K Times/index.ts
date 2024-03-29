function countSubarrays(nums: number[], k: number): number {
     let max = Math.max(...nums);
     let n=nums.length
     let currCount=0,left=0,ans=0;
     for(let right=0;right<n;right++){
         currCount+=nums[right]===max?1:0;
         while(currCount>=k){
             currCount-=nums[left]===max?1:0;
             left++;

         }
         ans+=left
     }
     return ans
}
