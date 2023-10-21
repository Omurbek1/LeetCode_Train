function maxProfit(prices: number[]): number {
    let profit = 0;
    let buyPrice = prices[0];
    let sellPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < sellPrice) {
            profit += sellPrice - buyPrice;
            buyPrice = prices[i];
            sellPrice = prices[i];
        } else {
            sellPrice = prices[i];
        }
    }

    profit += sellPrice - buyPrice;

    return profit;

};