function garbageCollection(garbage: string[], travel: number[]): number {

    const time: Record<string, number> = {
        M: 0,
        P: 0,
        G: 0
    }
    const last: Record<string, number> = {
        M: 0,
        P: 0,
        G: 0
    }
    const houses = garbage.length;
    for (let i = 0; i < houses; i++) {
        for (const trash of garbage[i]) {
            time[trash] +=1+ last[trash]
            last[trash] = 0
        }
        for (const X of 'MPG') last[X] += travel[i]

    }
    return time.M + time.P + time.G

};