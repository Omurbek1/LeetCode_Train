function commonChars(words: string[]): string[] {
    let prev = null;

    words.forEach(word => {
        const next = {}
        for (const c of word) {
            if (!prev) {
                next[c] = (next[c] || 0) + 1
            }
            else if (prev[c]) {
                prev[c] -= 1;
                next[c] = (next[c] || 0) + 1;
            }
        }
        prev = next;
    })
    return Object.keys(prev).reduce((acc, c) => {
        for (let i = 0; i < prev[c]; i++) {
            acc.push(c);
        }
        return acc
    }, [])

};