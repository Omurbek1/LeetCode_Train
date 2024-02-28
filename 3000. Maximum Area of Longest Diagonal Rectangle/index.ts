function areaOfMaxDiagonal(dimensions: number[][]): number {
  let length = 0;
  let area = 0;

  for (let i = 0; i < dimensions.length; i++) {
    const currentLength =
      dimensions[i][0] * dimensions[i][0] + dimensions[i][1] * dimensions[i][1];
    const currArea = dimensions[i][0] * dimensions[i][1];
    if (currentLength === length) {
      area = Math.max(area, currArea);
    } else if (currentLength > length) {
      length = currentLength;
      area = currArea;
    }
  }
  return area;
}
