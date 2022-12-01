function isIsomorphic(s: string, t: string): boolean {


    if (s.length != t.length) {
        return false
    }
    let sArr = new Array(128).fill(0)
    let tArr = new Array(128).fill(0)
    
    for (let i = 0; i < s.length; i++) {
        let sIdx = s.charCodeAt(i)
        let tIdx = t.charCodeAt(i)
        if (sArr[sIdx]!==tArr[tIdx]) {
            return false
        }
        sArr[sIdx] = i + 1
        tArr[tIdx]=i+1
    }
    return true
};