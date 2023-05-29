function findLUSlength(a: string, b: string): number {
    if (a === b) return -1

    if (a.length > b.length) return a.length

    return Math.max(a.length, b.length)



};