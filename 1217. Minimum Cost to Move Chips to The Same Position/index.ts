function minCostToMoveChips(position: number[]): number {

    let odd =0, even =0;
    for(let i=0; i<position.length; i++){
        if(position[0]%2===0){
            even++;
        }else{
            odd++;
        }
    }
    return Math.min(odd, even);
};