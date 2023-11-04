function getLastMoment(n: number, left: number[], right: number[]): number {
 let max=0
 for(let i=0;i<left.length;i++){
     max=Math.max(max,left[i])
 }
 for(let i=0;i<right.length;i++){
     max=Math.max(max,n-right[i])
 }
 return max
    
};