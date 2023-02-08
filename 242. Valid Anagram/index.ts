function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const sletters = {}

    for (let char of s) {
        if (!sletters[char]) {
            sletters[char] = 1
        } else {
            sletters[char]++
        }
    }

    for (let char of t) {
        if (!sletters[char]) return false
        if (sletters[char]) {
            sletters[char]--
        }

        if (sletters[char] === 0) {
            delete sletters[char]
        }
    }
    return Object.keys(sletters).length === 0
};