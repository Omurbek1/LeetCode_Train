function findSpecialInteger(arr: number[]): number {
    const search=Math.floor(arr.length/4)

    for(let i=0;i<arr.length-search;i++){
        if(arr[i]==arr[i+search]) return arr[i]

    }
};