/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"

 */
var addStrings = function(num1, num2) {
    let carry = 0;

   let firstP = num1.length - 1;
   let secondP = num2.length - 1;
   let res = '';

   while (firstP >= 0 || secondP >= 0) {
       let sum = 0;
       let first = firstP >= 0 ? Number(num1[firstP--]) : 0
       let second = secondP >= 0 ? Number(num2[secondP--]) : 0

       sum += first + second + carry;
       carry = 0;

       if (sum > 9) {
           sum %= 10;
           carry++;
       }
       res = sum + res;
   };

   if (carry > 0) {
       res = carry + res;
   }

   return res;

};