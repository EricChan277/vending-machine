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
  returnCoins(price, coinCount) {
    for (let i = 0; i < Object.entries(coinCount).length; i++) {
      let coinVal = Object.entries(coinCount)[i][1].value;
      let coinName = Object.entries(coinCount)[i][0];
      console.log(coinName + ' ' + coinVal);
    }
    console.log(price);
  }
};
