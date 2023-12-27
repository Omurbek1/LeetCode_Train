function minCost(colors: string, neededTime: number[]): number {

    const swap = (a: number, b: number) => {
        [neededTime[a], neededTime[b]] = [neededTime[b], neededTime[a]];
    }

    let minCost = 0;
    for (let i = colors.length - 2; i >= 0; i--) {
        if (colors[i] == colors[i + 1]) {
            // check for min cost 
            if (neededTime[i] < neededTime[i + 1]) {
                // if the colour at the current position needs lesser time , we remove this color 

                minCost += neededTime[i];
                swap(i, i + 1);
            } else {
                minCost += neededTime[i + 1];
            }
        }
    }
    return minCost
};