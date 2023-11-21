function countNicePairs(nums: number[]): number {

    const map = new Map<number, number>();
    let result = 0;
    const mod = 10 ** 9 + 7;
    for (const num of nums) {
        const rev = reverse(num);
        const diff = num - rev;
        const count = map.get(diff) || 0;
        result = (result + count) % mod;
        map.set(diff, count + 1);
    }
    return result;

};
const reverse = (num: number) => {
    let result = 0;
    while (num) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return result;
}