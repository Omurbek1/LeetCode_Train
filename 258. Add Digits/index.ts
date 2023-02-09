/**
 * 
 * @param num 
 * @returns 
 * 
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0

 */

const addDigits = (num: number): number => {
    let sum = 0;
    while (num >= 10) {
        sum += num % 10;
        num = Math.floor(num / 10)

        if (num < 10) {
            num += sum
            sum = 0
        }
    }
    return num

};