const licenseKeyFormatting = (s: string, k: number): string => {
    let newStr = s.replace(/-/g, '').toUpperCase()
    let arr = newStr.split('')

    for (let i = newStr.length - 1 - k; i >= 0; i -= k) {
        arr[i] = arr[i] + '-'
    }

    return arr.join('')
    // return result.split('').reverse().join('')
};