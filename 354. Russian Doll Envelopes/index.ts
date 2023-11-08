function maxEnvelopes(envelopes: number[][]): number {
    envelopes.sort((a,b)=>a[0]-b[0]||b[1]-a[1])
    let dp:number[]=[]
    for(let i=0;i<envelopes.length;i++){
        let index=binarySearch(dp,envelopes[i][1])
        if(index===dp.length){
            dp.push(envelopes[i][1])
        }else{
            dp[index]=envelopes[i][1]
        }
    }
    return dp.length
    
};

const binarySearch=(arr:number[],target:number):number=>{
    let left=0
    let right=arr.length-1
    while(left<=right){
        let mid=left+Math.floor((right-left)/2)
        if(arr[mid]>=target){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return left
}