function wordPattern(pattern: any, str: any): boolean {


    const sWord = str.split(" ")
    if (sWord.length !== pattern.length) return false
    
    const patterMap = new Map()
    const unqueSet = new Set()
    for (let i = 0; i < pattern.length; i++) {
        if (!patterMap.has(pattern[i])) {
            if (unqueSet.has(sWord[i])) return false
            
            patterMap.set(pattern[i], sWord[i])
                unqueSet.add(sWord[i])
        } else {
            if (sWord[i] !== patterMap.get(pattern[i])) return false
        }
    }
    return true
};