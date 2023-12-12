const MOD = 1e9 + 7;

function numSubseq(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    const length = nums.length;
    let left = 0
    let res = 0;
    let pow2 = [1];
    let right = length - 1;

    for (var i = 1; i < length; i++) {
        pow2[i] = (pow2[i - 1] * 2) % MOD;
    }

    while (left <= right) {
        if (nums[left] + nums[right] > target) {
            right--;
        } else {
            res = (res + pow2[right - left]) % MOD;
            left++;
        }
    }

    return res;
};

function pow2(n: number): number {
    let res = 1;
    let base = 2;

    while (n > 0) {
        if (n % 2 === 1) {
            res = (res * base) % MOD;
        }
        base = (base * base) % MOD;
        n = Math.floor(n / 2);
    }

    return res;
};