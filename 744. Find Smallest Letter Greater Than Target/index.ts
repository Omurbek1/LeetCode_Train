function nextGreatestLetter(letters: string[], target: string): string {

    /*You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.
    
    Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
    
    You must write an algorithm with O(log n) runtime complexity.*/

    let left = 0, right = letters.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (letters[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return letters[left] > target ? letters[left] : letters[0]
};