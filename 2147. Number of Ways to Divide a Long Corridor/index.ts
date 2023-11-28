function numberOfWays(corridor: string): number {
    let totalWays = 0, temp = 0, ans = 1, count = 0
    for (let i = 0; i < corridor.length; i++) {
        if (corridor[i] === 'S') {
            if (temp > 0) {
                ans = (ans * temp) % (10 ** 9 + 7)
                temp = 0
                count = 0
            }
            totalWays++
            count++
        }
        if (count == 2) {
            temp++
        }
    }
    return totalWays > 0 && totalWays % 2 == 0 ? ans : 0

};