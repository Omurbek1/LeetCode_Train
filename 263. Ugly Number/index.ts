const isUgly=(n: number): boolean=> {
    //TODO: Бул жерден кылдык
    if(n===0) return false;
    //FIXME
    //FIXME 
    while(n!=1){
        if(n%2===0){
            n=n/2;
            continue;
        }
        if(n%3===0){
            n=n/3
            continue
        }
        if(n%5===0){
            n=n/5
            continue
        }
        return false
    }
    return true;

};
console.log(isUgly(6))
console.log(isUgly(14))
console.log(isUgly(5))
