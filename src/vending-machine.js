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

      if (missingStock === 0) {
        return currentStock;
      } else {
        return (currentStock += missingStock);
      }
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
    return this.vendingData;
  }
  checkChange(input, price, coinCount) {
    if (typeof input !== 'number' || input === 0) {
      return 0;
    } else if (input < price) {
      return 0;
    } else {
      let change = input - price;
      return Number(change.toFixed(2));
    }
  }
};
