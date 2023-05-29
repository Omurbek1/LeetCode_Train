function largeGroupPositions(s) {
    const result = [];

    let start: number = 0;
    let end: number = 0;

    while (end < s.length) {
        // Move the end pointer until a different character is found or the end of the string is reached
        while (end < s.length && s[end] === s[start]) {
            end++;
        }

        // Check if a large group is found (has at least 3 characters)
        if (end - start >= 3) {
            result.push([start, end - 1] as never);
        }

        // Move the start pointer to the next character
        start = end;
    }

    return result;
}
