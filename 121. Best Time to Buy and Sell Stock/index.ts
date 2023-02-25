const maxProfit=(prices: number[]): number=> {

    let buyPrice=prices[0];
    prices[0]=0;
    let profit=0;
    for(let i=1;i<prices.length;i++){
        if (buyPrice >prices[i]){
            buyPrice=prices[i];
            prices[i]=0;
        }else{
            profit=Math.max(profit,prices[i]-buyPrice);
        }
    }
    return profit;
};