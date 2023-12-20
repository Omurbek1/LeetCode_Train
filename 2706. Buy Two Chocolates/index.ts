function buyChoco(prices: number[], money: number): number {

    prices.sort((a, b) => a - b);
    const totalPrice = prices[0] + prices[1];
    if (totalPrice > money) {
        return money;
    } else {
        return money - totalPrice;
    }
};