function buildArray(target: number[], n: number): string[] {
    let result: string[] = [];
    let i = 0
    let j = 1

    while (i < target.length) {
        if (target[i] === j) {
            result.push('Push')
            i++
        } else {
            result.push('Push', 'Pop')
        }
        j++
    }
    return result

};