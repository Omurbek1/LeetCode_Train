/**
 * 
 * @param s 
 * @param t 
 * @returns 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 */

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const sletters = {}

    for (let char of s) {
        if (!sletters[char]) {
            sletters[char] = 1
        } else {
            sletters[char]++
        }
    }

    for (let char of t) {
        if (!sletters[char]) return false
        if (sletters[char]) {
            sletters[char]--
        }

        if (sletters[char] === 0) {
            delete sletters[char]
        }
    }
    return Object.keys(sletters).length === 0
};