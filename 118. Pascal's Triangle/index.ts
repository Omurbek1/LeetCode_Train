/**
 * 
 * @param numRows 
 * @returns 
 * 118. Pascal's Triangle
Easy
9.2K
303
Companies
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 */

const generate = (numRows: number): number[][] => {
    const table = [];
    for (let i = 0; i < numRows; i++) {
        table[i] =  [] as never;
        table[i][0] = 1 as never;
        for (let j = 1; j < i; j++) {
            table[i][j] = table[i - 1][j - 1] + table[i - 1][j] as never
        }
        table[i][i] = 1 as never;;
    }
    return table;

};