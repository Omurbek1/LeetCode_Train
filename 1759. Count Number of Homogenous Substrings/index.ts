function countHomogenous(s: string): number {
    let count = 0;
    let prev = '';
    let curr = '';
    let currentCount = 0;
    for (let i = 0; i < s.length; i++) {
        curr = s[i];
        if (curr === prev) {
            currentCount++;
        }else{
            currentCount=1
        }
        count += currentCount;
        prev = curr
    }

    return count%(10**9 + 7)

};