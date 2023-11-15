function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  
    arr.sort((a, b) => a - b);
    arr[0] = 1;
    for(let i=0;i<arr.length-1;i++) {
        if(arr[i+1]-arr[i]>1){
            arr[i + 1] = arr[i] + 1
        }
          
    }
    return arr[arr.length-1]

};