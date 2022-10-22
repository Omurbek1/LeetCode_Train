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
        const sum = (a.length - 1-i < 0 ? 0 : a[a.length -1- i] * 1) +
            (b.length - 1-i < 0 ? 0 : b[b.length -1- i] * 1)+carryOver;

        result[MaxLength - 1-i] = sum % 2;
        carryOver = Math.floor(sum / 2)
        i+=1
    }
    if (carryOver > 0) {
        result.unshift(1)
    }

    return result.join('')
};
