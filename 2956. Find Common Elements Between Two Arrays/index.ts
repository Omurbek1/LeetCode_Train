function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    const set1 = nums1.filter((num) => nums2.includes(num)).length;

    const set2 = nums2.filter((num) => nums1.includes(num)).length;
    return [set1, set2];

};