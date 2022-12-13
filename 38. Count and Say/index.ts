// typescript

/**
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

For example, the saying and conversion for digit string "3322251":
 * @param n 
 * @returns 
 */
function countAndSay(n: number): string {
	let result = '1';

	while (n-- > 1) {
		let next = '';
		let count = 1;
		let current = result[0];

		for (let i = 1; i < result.length + 1; i++) {
			if (result[i] !== current) {
				next += `${count}${current}`;
				current = result[i];
				count = 1;
			} else {
				count += 1;
			}
		}
		result = next;
    }
    return result
}
