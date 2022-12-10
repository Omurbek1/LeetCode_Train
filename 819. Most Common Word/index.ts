function mostCommonWord(paragraph: string, banned: string[]): string {

    let bannerSet = new Set(banned)
    let map = {}
    let wordArray = paragraph.toLowerCase().match(/[a-z]+/g)
    for (let i = 0; i < paragraph.length; i++) {
        if (!bannerSet.has(wordArray[i])) {
            map[wordArray[i]] = (map[wordArray[i]] | 0) + 1

        }


    }
    let maxCount = 0
    let maxWord = ""

    for (let key in map) {
        if (map[key] > maxCount) {
            maxWord = key;
            maxCount=map[key]
        }

    }
    return maxWord


};