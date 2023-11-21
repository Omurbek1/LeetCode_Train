function successfulPairs(spells: number[], potions: number[], success: number): number[] {
potions.sort((a, b) => a - b);
return spells.map((spell) => potions.length-binarySearch(potions,Math.ceil(success/spell)))
};

const binarySearch = (arr: number[], target: number): number => {

    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {

        const mid = left + Math.floor((right - left) / 2);
        if(arr[mid] < target){
            left = mid + 1
        }else{
            right = mid-1
        }
    }
    return left
}