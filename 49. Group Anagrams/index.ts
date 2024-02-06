function groupAnagrams(strs: string[]): string[][] {
    const anagrams = new Map<string, string[]>();
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!anagrams.has(sortedStr)) {
            anagrams.set(sortedStr, []);
        }
        anagrams.get(sortedStr).push(str);
    }
    return Array.from(anagrams.values());

}
