function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
    const graph = new Map<number, Set<number>>();
    const count = Array(n).fill(1);
    const res = Array(n).fill(0);
    
    for (const [u, v] of edges) {
        if (!graph.has(u)) graph.set(u, new Set());
        if (!graph.has(v)) graph.set(v, new Set());
        graph.get(u).add(v);
        graph.get(v).add(u);
    }
    
    const dfs1 = (node: number, parent: number) => {
        if (!graph.has(node)) return;
        for (const child of graph.get(node)) {
        if (child === parent) continue;
        dfs1(child, node);
        count[node] += count[child];
        res[node] += res[child] + count[child];
        }
    };
    
    const dfs2 = (node: number, parent: number) => {
        if (!graph.has(node)) return;
        for (const child of graph.get(node)) {
        if (child === parent) continue;
        res[child] = res[node] - count[child] + n - count[child];
        dfs2(child, node);
        }
    };
    
    dfs1(0, -1);
    dfs2(0, -1);
    
    return res;
}
