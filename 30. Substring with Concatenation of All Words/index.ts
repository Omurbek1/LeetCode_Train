function findSubstring(s: string, words: string[]): number[] {
    
        const res: number[] = [];
    
        const wordLength = words[0].length;
        const totalLength = words.length * wordLength;
    
        const wordMap = new Map<string, number>();
        for (const word of words) {
            wordMap.set(word, (wordMap.get(word) || 0) + 1);
        }
    
        for (let i = 0; i < s.length - totalLength + 1; i++) {
            const subString = s.slice(i, i + totalLength);
            const subStringMap = new Map<string, number>();
            for (let j = 0; j < subString.length; j += wordLength) {
                const word = subString.slice(j, j + wordLength);
                subStringMap.set(word, (subStringMap.get(word) || 0) + 1);
            }
            if (isSameMap(wordMap, subStringMap)) {
                res.push(i);
            }
        }
    
        return res;

};

const isSameMap = (map1: Map<string, number>, map2: Map<string, number>) => {
    if (map1.size !== map2.size) {
        return false;
    }
    for (const [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }
    return true;
}