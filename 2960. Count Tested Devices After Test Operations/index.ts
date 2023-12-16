function countTestedDevices(batteryPercentages: number[]): number {

    let count = 0;
    for (let i = 0, k = batteryPercentages.length; i < k; i++) {
        if (batteryPercentages[i] - count > 0) {
            count++;
        }
    }
    return count;
};