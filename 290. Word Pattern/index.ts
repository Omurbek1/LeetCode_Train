function wordPattern(pattern: any, str: any): boolean {
    // const mapCharToWord = {}
    // const mapWordToChar = {}

    // pattern = pattern.split('')
    // str = str.split(' ')
    // if (pattern.length != str.length) return false

    // for (let i = 0; i < str.length; i++) {
    //     let cutWord = str[i]
    //     let curLetter = pattern[i]

    //     if (mapCharToWord[curLetter] !== undefined && mapCharToWord[curLetter] !== cutWord) return false
    //     if (mapWordToChar[cutWord] !== undefined && mapWordToChar[cutWord] !== curLetter) return false

    //     mapWordToChar[cutWord] = curLetter
    //     mapCharToWord[curLetter] = cutWord


    // }
    // return true


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