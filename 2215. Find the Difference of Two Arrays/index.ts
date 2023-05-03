function findDifference(nums1: number[], nums2: number[]): number[][] {
    let firstSet = new Set(nums1)
    let secondSet = new Set(nums2)

    for (let num of nums2) {
        if (firstSet.has(num)) {
            firstSet.delete(num)
            secondSet.delete(num)
        }
    }
    return [[...firstSet], [...secondSet]]
};