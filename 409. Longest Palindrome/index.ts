/**
 * 
 * @param s 
 * @returns 
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 */

function longestPalindrome(s: string): number {

    let len = 0
    let map = new Map()
    for (let c of s) {
        let n=0
        if (map.has(c)) {
            n = map.get(c)
            if(n%2) len +=2
        }
        map.set(c,n+1)
    }
    return s.length>len?len+1:len
};