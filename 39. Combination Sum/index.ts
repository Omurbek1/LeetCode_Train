function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = []
    const path: number[] = []

    const comFunct = (index: number, sum: number) => {
        if (sum === target) {
            result.push([...path])
            return
        }
        if (sum > target) return
        for (let i = index; i < candidates.length; i++) {
            path.push(candidates[i])
            comFunct(i, sum + candidates[i])
            path.pop()
        }
    }
    comFunct(0, 0)
    return result

};