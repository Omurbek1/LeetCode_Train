function constructRectangle(area: number): number[] {
    let diff = 9999999999;
    let solArr = [];
    for (let i = 1; i <= Math.ceil(area / 2); i++) {
        let remainder = area % i;
        if (remainder === 0) {
            let div = area / i;
            let tempDiff = Math.abs(i - div);
            if (tempDiff < diff) {
                let min = i < div ? i : div;
                let max = i > div ? i : div;
                solArr = [max as never, min as never];
                diff = tempDiff;
            }
        }
    }
    return solArr;
};