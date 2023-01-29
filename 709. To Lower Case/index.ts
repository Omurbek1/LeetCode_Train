function toLowerCase(s: string): string {
    let strArray = s.split('')
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].charCodeAt(0) >= 65 && strArray[i].charCodeAt(0) <= 90) {
            strArray[i] = String.fromCharCode(strArray[i].charCodeAt(0)+32)
        }
    }
    return strArray.join('')
};