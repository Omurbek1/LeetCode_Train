function findKthPositive(arr: number[], k: number): number {
    let missingCounter=0

    for(let i=1;missingCounter!=k;i++){
        if(!arr.includes(i)) missingCounter++;
        if(missingCounter===k) return i;
    }
};