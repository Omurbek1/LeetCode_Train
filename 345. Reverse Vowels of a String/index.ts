/**
 * 
 * @param s 
 * @returns 
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 */

function reverseVowels(s: string): string {
    const vowels = {}
    for (const char of 'aeiouAEIOU') {
        vowels[char] = true;
    }

    const characters = s.split('');

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !(s[left] in vowels)) {
            left++;
        }

        while (left < right && !(s[right] in vowels)) {
            right--;
        }
        swap(characters, left, right);
        left++;
        right--;

    }
    return characters.join('');
};

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}