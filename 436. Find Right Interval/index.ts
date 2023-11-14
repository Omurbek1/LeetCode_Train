function findRightInterval(intervals: number[][]): number[] {
    let result: number[] = Array(intervals.length);
    for (let i = 0; i < intervals.length; i++) {
        if (result[i] != undefined)
            continue;

        let minR = Number.MAX_SAFE_INTEGER;
        let minL = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < intervals.length; j++) {
            let deltaR = intervals[j][0] - intervals[i][1];
            let deltaL = intervals[i][0] - intervals[j][1];

            if (deltaR >= 0 && deltaR < minR) {
                result[i] = j;
                minR = deltaR;
            } else if (deltaL >= 0 && deltaL < minL && result[j] == undefined) {
                result[j] = i;
                minL = deltaL;
            }
        }

        if (result[i] == undefined)
            result[i] = -1;
    }

    return result
};