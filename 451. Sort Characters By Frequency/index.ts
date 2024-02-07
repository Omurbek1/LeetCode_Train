function frequencySort(s: string): string {
  const map = new Map<string, number>();
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  let res = "";
  for (const [c, count] of sorted) {
    res += c.repeat(count);

  }
  return res;
}
