function peakIndexInMountainArray(arr: number[]): number {
    let i=0, j=arr.length-1
    while(i<j){
        let mid=Math.floor((i+j)/2)
        if(arr[mid]>arr[mid+1]){
            j=mid
        }else{
            i=mid+1
        }

    }
    return i

};