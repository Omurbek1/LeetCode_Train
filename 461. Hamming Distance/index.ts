
/**
 * 
 * @param x 
 * @param y 
 * @returns 
 *  

Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
Example 2:

Input: x = 3, y = 1
Output: 1
 */
const hammingDistance = (x: number, y: number): number => {
    let result = 0;

    while (x > 0 || y > 0) {
        const rightX = x % 2;
        const rightY = y % 2;
        if (rightX !== rightY) {
            result += 1;
        }
        x = Math.floor(x / 2);
        y = Math.floor(y / 2);
    }
    return result
};