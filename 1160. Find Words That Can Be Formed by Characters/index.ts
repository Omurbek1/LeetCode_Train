function countCharacters(words: string[], chars: string): number {

    const charMap = new Map();
    for (const char of chars) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    return words.reduce((acc, word) => {
        const wordMap = new Map();
        for (const char of word) {
            wordMap.set(char, (wordMap.get(char) || 0) + 1);
        }
        for (const [char, count] of wordMap) {
            if (!charMap.has(char) || charMap.get(char) < count) {
                return acc;
            }
        }
        return acc + word.length;
    }, 0)
};