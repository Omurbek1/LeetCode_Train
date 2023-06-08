function findPoisonedDuration(timeSeries: number[], duration: number): number {
    //   You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.
    //   Return the number of seconds that Ashe is poisoned during the inclusive range of [timeSeries[i], timeSeries[i] + duration - 1].


   if (timeSeries.length === 0) {
       return 0
   }
   let result = 0
   for (let i = 1; i < timeSeries.length; i++) {
       result += Math.max(timeSeries[i] - timeSeries[i - 1], duration)
   }
   return result
};