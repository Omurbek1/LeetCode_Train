function removeStars(s: string): string {
    if (s.length === 1) return ' '
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') stack.pop()
        else stack.push(s[i])
    }
    return stack.join('')
};