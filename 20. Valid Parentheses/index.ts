function isValid(s: string): boolean {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (pairs[c]) {
            stack.push(pairs[c]);
        } else if (c !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
    
};