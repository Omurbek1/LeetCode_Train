function restoreArray(adjacentPairs: number[][]): number[] {
    const map = new Map<number, number[]>();
    for (const adjacentPair of adjacentPairs) {
        map.set(adjacentPair[0], (map.get(adjacentPair[0]) || []).concat(adjacentPair[1]));
        map.set(adjacentPair[1], (map.get(adjacentPair[1]) || []).concat(adjacentPair[0]));
    }
    let n = adjacentPairs.length + 1;
    const ret = new Array(n).fill(0);
    for (const [e, adj] of map.entries()) {
        if (adj.length === 1) {
            ret[0] = e;
            break;
        }
    }
    ret[1] = map.get(ret[0])[0];
    for (let i = 2; i < n; i++) {
        const adj = map.get(ret[i - 1]);
        ret[i] = ret[i - 2] === adj[0] ? adj[1] : adj[0];
    }
    return ret;

};