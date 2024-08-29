function removeStones(stones: number[][]): number {
  let island = 0;
  const m = new Map();
  const isConnected = (x: number, y: number) => {
    const xRoot = find(x);
    const yRoot = find(y);
    return xRoot == yRoot;
  };
  const find = (x: number) => {
    if (!m.has(x)) {
      m.set(x, x);
    }
    if (m.get(x) !== x) {
      m.set(x, find(m.get(x)));
    }
    return m.get(x);
  };

  const union = (x: number, y: number) => {
    const xRoot = find(x);
    const yRoot = find(y);
    if (xRoot !== yRoot) {
      m.set(xRoot, yRoot);
      island--;
    }
  };
  for (const [x, y] of stones) {
    if (!m.has(x)) {
      m.set(x, x);
      island++;
    }
    if (!m.has(~y)) {
      m.set(~y, ~y);
      island++;
    }
    union(x, ~y);
  }
  return stones.length - island;
}
