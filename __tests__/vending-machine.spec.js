const VendingMachine = require('../src/vending-machine.js');

//              Story 1
// Title:
// A [student] wants to have [a well paying job with minimal effort]

// Narrative:
// As a [customer], they want to [to buy a degree],
// so that they can get [a well paying job with minimal effort].
// In order to get [a well paying job with minimal effort],
// a [student] wants [to buy a degree].

// Scenario 1
// Given that the [student selects a Degree],
// When [the student gives the exact amount of money],
// And [the Degree is in-stock],
// Then [dispense the selected Degree],
// And [lower the selected Degree's stock by 1]

// Scenario 2
// Given that the [student selects a Degree],
// When [the student gives the exact amount of money],
// And [the Degree is not in-stock],
// Then [return the money the student gave]

// Scenario 3
// Given that the [student selects a Degree],
// When [the student puts in too much money],
// And [the Degree is in-stock],
// Then [dispense the selected Degree],
// And [lower the selected Degree's stock by 1]
// And [return the amount inputted minus the price of the degree]

// Scenario 4
// Given that the [student selects a Degree],
// When [the student does not give enough money],
// And [the Degree is in-stock],
// Then [display the amount left to pay],
// And [give them an option to get back the inputted amount of money]

describe('A vending machine that sells degrees', () => {
  let degree = {};

  beforeEach(() => {
    degree.name = 'engineering';
    degree.data = {
      stem: {
        [degree.name]: {
          price: 3.45,
          stock: 1
        }
      },
      inputAmount: {
        exact: 3.45,
        over: 5.0,
        less: 3
      },
      coinsLeft: {
        quarter: {
          value: 0.25,
          amount: 10
        },
        dime: {
          value: 0.1,
          amount: 10
        },
        nickel: {
          value: 0.05,
          amount: 10
        },
        loonie: {
          value: 1,
          amount: 10
        },
        toonie: {
          value: 2,
          amount: 10
        }
      }
    };

    degree.subject = new VendingMachine(degree.data);
  });

  describe('The Stocker wants to check the inventory', () => {
    it('Should return the inventory.', () => {
      const stem = degree.subject.checkStock();
      //   console.log(stem);
      expect(stem).toEqual(degree.data.stem);
    });
  });
  describe('The Student selects a Degree', () => {
    it('Should check the stock of the selected degree', () => {
      const { stock } = degree.subject.vend(degree.name);
      expect(stock).toEqual(degree.data.stem[degree.name].stock);
    });
  });
  describe('The Student wants to inputs an amount', () => {
    it('Should check the price of the selected Degree', () => {
      const { price } = degree.subject.vend(degree.name);
      //   console.log(price);
      expect(price).toEqual(degree.data.stem[degree.name].price);
    });
    it('Should check the amount that the student inputted', () => {
      const input = degree.subject.checkPrice(degree.data.inputAmount.exact);
      expect(input).toEqual(degree.data.inputAmount.exact);
    });
  });
  describe('The student wants to purchase a selected degree', () => {
    it('Should return the inputted amount minus the price if there is any change', () => {
      const input = degree.subject.checkPrice(degree.data.inputAmount.over);
      const { price } = degree.subject.vend(degree.name);
      const change = degree.subject.checkChange(input, price);
      expect(change).toEqual(1.55);
    });
    it('Should not vend the item if there is not enough change', () => {
      const input = degree.subject.checkPrice(degree.data.inputAmount.less);
      const { price } = degree.subject.vend(degree.name);
      const change = degree.subject.checkChange(input, price);
      expect(change).toEqual(0);
    });
  });
});
