function hammingDistance(x: number, y: number): number {
    let result=0;

    while(x>0 || y>0){
        const rightX=x%2;
        const rightY=y%2;
        if(rightX!==rightY){
            result+=1;
        }
        x=Math.floor(x/2);
        y=Math.floor(y/2);
    }
    return result  
};