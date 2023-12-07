function hIndex(citations: number[]): number {
 const n=citations.length
 let left=0
 let right=n-1
 while(left<=right){
    let mid=Math.floor((left+right)/2)
    let h=n-mid

    if(citations[mid]===h) return h
    if(citations[mid]<h){
        left=mid+1
    }else{
        right=mid-1
    }
 }
 return n-left
};