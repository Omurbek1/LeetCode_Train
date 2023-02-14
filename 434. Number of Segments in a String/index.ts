/**
 * 
 * @param s 
 * @returns 
 * 434. Number of Segments in a String
Easy
611
1.1K
Companies
Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

 

Example 1:

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
Example 2:

Input: s = "Hello"
Output: 1
 */

function countSegments(s: string): number {

    let segment = 0;
    let pointer = 0;

    while (pointer < s.length) {
        let currentChar = s[pointer];

        if (currentChar !== " ") {
            segment++;
            for (let i = pointer + 1; i < s.length; i++) {
                let currentInnerChar = s[i];
                if (currentInnerChar === " ") {
                    pointer = i;
                    break;
                }
                 if(i===s.length-1){
                    pointer=s.length;
                
            }
            }
           
        }
        pointer++;
    }
    return segment;

};