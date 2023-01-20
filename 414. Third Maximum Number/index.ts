function thirdMax(nums: number[]): number {
    let temp = nums.sort((a, b) => {
        return b - a
    })
    let s = new Set(temp)
    const result = []
    s.forEach(val => {
        result.push(val)
    })

    if (result.length < 3) {
        return result[0]

    } else {
        return result[2]
    }
};