module.exports = class VendingMachine {
  constructor(_vendingData) {
    this.vendingData = _vendingData;
  }

  checkStock() {
    return this.vendingData.stem;
  }

  fillStock(stock) {
    for (let i = 0; i < Object.entries(stock).length; i++) {
      let currentStock = Object.entries(stock)[i][1].stock;
      let maxStock = Object.entries(stock)[i][1].maxStock;
      let missingStock = maxStock - currentStock;

      return currentStock + missingStock;
    }
  }

  fillChange(coins) {
    let coinLength = Object.entries(coins).length;

    for (let i = 0; i < coinLength; i++) {
      let currentCoinAmount = Object.entries(coins)[i][1].currentAmount;
      let maxCoinAmount = Object.entries(coins)[i][1].maxAmount;
      let missingCoins = maxCoinAmount - currentCoinAmount;

      return currentCoinAmount + missingCoins;
    }
  }

  vend(productName) {
    if (typeof productName !== 'string' || productName === '') {
      return 0;
    } else {
      return this.vendingData.stem[productName];
    }
  }
  checkPrice(amount) {
    if (typeof amount !== 'number' || amount === 0) {
      return 0;
    } else {
      return amount;
    }
  }
  checkCoinCount(coins) {
    return this.vendingData.coinsLeft;
  }
  checkChange(input, price) {
    if (typeof input !== 'number' || input === 0) {
      return 0;
    } else if (input < price) {
      return 0;
    } else {
      let changeInt = input - price;
      let change = Number(changeInt.toFixed(2));
      return change;
    }
  }
  returnCoins(price, coins) {
    if (price == 0) {
      return 0;
    } else {
      while (price > 0) {
        for (let i = 0; i < Object.entries(coins).length - 1; i++) {
          const coinVal = Object.entries(coins)[i][1].value;
          const coinName = Object.entries(coins)[i][0];
          let coinCount = Object.entries(coins)[i][1].currentAmount;

          var countOfDispensed = 0;
          if (price == coinVal || price - coinVal < 0 || coinCount == 0) {
            return coinName + ' ' + (i + 1);
          } else {
            price = price - coinVal;

            countOfDispensed++;
            coinCount--;
            let leftover = coinName + ' ' + countOfDispensed;
            return leftover;
          }
        }
      }
    }
  }
};
