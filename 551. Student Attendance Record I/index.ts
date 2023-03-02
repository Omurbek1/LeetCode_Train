const checkRecord=(s: string): boolean=> {
    let absent=0
    let late=0
    for(let i=0;i<s.length;i++){
        if(s[i]==='A'){
            absent++
           
        }if(absent>=2) return false
        if(s[i]==='L'){
            late++
        }else{
            late=0
        }
        if(late>=3) return false
    }
    return true
};