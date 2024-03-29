function maxSubarrayLength(nums: number[], k: number): number {

   const frequencyMap: { [key: number]: number } = {};
   let leftIndex:number = 0;
   let rightIndex:number = 0;
   let len:number = 0;
   while(rightIndex < nums.length) {

      frequencyMap[nums[rightIndex]] = (frequencyMap[nums[rightIndex]] || 0) + 1;
      while(frequencyMap[nums[rightIndex]] > k) {
         frequencyMap[nums[leftIndex]]--;
         leftIndex++;
      }
        len = Math.max(len, rightIndex - leftIndex + 1);
      rightIndex++;
   }
    return len;
}
