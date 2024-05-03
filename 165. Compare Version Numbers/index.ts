function compareVersion(version1: string, version2: string): number {
  const v1 = version1.split(".");
  const v2 = version2.split(".");

  let i = 0;

  while (i < v1.length || i < v2.length) {
    const num1 = i < v1.length ? parseInt(v1[i]) : 0;
    const num2 = i<v2.length ? parseInt(v2[i]) : 0;

    if (num1 < num2) return -1;
    if (num1 > num2) return 1;
    i++;
  }
  return 0;
  // const v1 = version1.split('.');
  // const v2 = version2.split('.');

  // let i = 0;
  // while (i < v1.length || i < v2.length) {
  //     const num1 = i < v1.length ? parseInt(v1[i]) : 0;
  //     const num2 = i < v2.length ? parseInt(v2[i]) : 0;

  //     if (num1 < num2) return -1;
  //     if (num1 > num2) return 1;
  //     i++;
  // }

  // return 0;
}
