module.exports = class VendingMachine {
  constructor(_vendingData) {
    this.vendingData = _vendingData;
  }

  checkStock() {
    return this.vendingData.stem;
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
  checkChange(input, price) {
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
