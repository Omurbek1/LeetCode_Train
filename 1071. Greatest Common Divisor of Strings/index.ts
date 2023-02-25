function gcdOfStrings(str1: string, str2: string): string {
    if(str1+str2!==str2+str1) return '';

    let m=str1.length;
    let n=str2.length;

    let gcd=(x,y)=>{
        if(!y) return x;
        return gcd(y,x%y);
    }
    let div =gcd(m,n)
    return str1.substring(0,div);
};