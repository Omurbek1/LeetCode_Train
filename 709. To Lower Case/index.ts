/**
 * 
 * @param s 
 * @returns 
 * Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

Example 1:

Input: s = "Hello"
Output: "hello"
Example 2:

Input: s = "here"
Output: "here"
Example 3:

Input: s = "LOVELY"
Output: "lovely"

 */

function toLowerCase(s: string): string {
    let strArray = s.split('')
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].charCodeAt(0) >= 65 && strArray[i].charCodeAt(0) <= 90) {
            strArray[i] = String.fromCharCode(strArray[i].charCodeAt(0) + 32)
        }
    }
    return strArray.join('')
};