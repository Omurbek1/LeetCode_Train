/**
 * Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.

 * @param s 
 * @param t 
 * @returns 
 */
function isIsomorphic(s: string, t: string): boolean {
    if (s.length != t.length) {
        return false
    }
    let sArr = new Array(128).fill(0)
    let tArr = new Array(128).fill(0)
    
    for (let i = 0; i < s.length; i++) {
        let sIdx = s.charCodeAt(i)
        let tIdx = t.charCodeAt(i)
        if (sArr[sIdx]!==tArr[tIdx]) {
            return false
        }
        sArr[sIdx] = i + 1
        tArr[tIdx]=i+1
    }
    return true
};