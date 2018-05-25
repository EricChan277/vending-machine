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
// And [return the amount inputted - the price of the degree]

// Scenario 4
// Given that the [student selects a Degree],
// When [the student does not give enough money],
// And [the Degree is in-stock],
// Then [display the amount left to pay],
// And [give them an option to get back the inputted amount of money]

describe('A student wants to buy a degree', () => {
  let degree = {};
  beforeEach(() => {
    degree.name = 'engineering';
    degree.price = 3;
    degree.data = {
      degrees: {
        [degree.name]: {
          price: [degree.price],
          instock: 2
        }
      }
    };
  });
});
