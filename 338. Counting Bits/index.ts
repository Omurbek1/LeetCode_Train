function countBits(n: number): number {
    let bits=[]
    for(let i=0;i<=n;n++){
      bits.push(i.toString(2).split('1').length-1 as never)
    }
    return bits as never;

};