const MOD = 10 ** 9 + 7;
function knightDialer(n: number): number {

    const numpad = {
        0: 1,
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
    }
    if (n > 1) numpad[5] = 0;
    for (let i = 1; i < n; i++) {
        const n0 = numpad[4] + numpad[6];
        const n1 = numpad[6] + numpad[8];
        const n2 = numpad[7] + numpad[9];
        const n3 = numpad[4] + numpad[8];
        const n4 = numpad[3] + numpad[9] + numpad[0];
        const n6 = numpad[1] + numpad[7] + numpad[0];
        const n7 = numpad[2] + numpad[6];
        const n8 = numpad[1] + numpad[3];
        const n9 = numpad[2] + numpad[4];

        numpad[0] = n0 % MOD;
        numpad[1] = n1 % MOD;
        numpad[2] = n2 % MOD;
        numpad[3] = n3 % MOD;
        numpad[4] = n4 % MOD;
        numpad[6] = n6 % MOD;
        numpad[7] = n7 % MOD;
        numpad[8] = n8 % MOD;
        numpad[9] = n9 % MOD;
    }
    return Object.values(numpad).reduce((p, v) => (p + v) % MOD, 0);
};