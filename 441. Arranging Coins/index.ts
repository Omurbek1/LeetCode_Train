/**
 * 
 * @param n 
 * @returns 
 * 441. Arranging Coins
Easy
3.1K
1.2K
Companies
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

 

Example 1:


Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.
Example 2:


Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.
 */

const arrangeCoins=(n: number): number=> {
    let level=0;
    let coins=1;

    while(n>=coins){
        n=n-coins;
        coins++;
        level++
    }
    return level

};