/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

/* Берилген эки экилик саптар a жана b, алардын 
суммасын экилик сап катары кайтарыңыз.*/

const addBinary = function(a, b) {
	let carryOver = 0;
	let MaxLength = Math.max(a.length, b.length);
	let result = Array(MaxLength).fill(0);

	let i = 0;

	while (i < MaxLength) {
		const sum = (a.length - i < 0 ? 0 : a[a.length - i] * 1) + (b.length - i < 0 ? 0 : b[b.length - i] * 1);

		result[MaxLength - i] = sum % 2;
	}
};
