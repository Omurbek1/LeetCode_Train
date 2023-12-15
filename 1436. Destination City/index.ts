function destCity(paths: string[][]): string {

  let destMap = new Map<string,string>();
  for (const path of paths) {
    destMap.set(path[0], path[1]);
  }
  for (const value of destMap.values()) {
    if (!destMap.has(value)) return  value;
  }
};