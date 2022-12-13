let myAtoi = function (s) {
    // result 
    let res = 0
    let i = 0
    while (i < s.length) {
        if (s[i] === '') i++;
        else break
    }
    let negative = false;
    if (s[i] === '-') { negative = true; i++; }
    else if (s[i] === '+') i++;
    while (i < s.length) {
        if (isNaN(s[i]) || s[i]==='') break;
        res *= 10;
        res+=Number(s[i])
    }
    if(negative) res=-res
    return Math.max(Math.pow(2,31),Math.min(Math.pow(2,31)-1, res))
}



// -42