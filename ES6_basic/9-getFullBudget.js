// Import getBudgetObject function
import getBudgetObject from './7-getBudgetObject.js';

// Export default function getFullBudgetObject
export default function getFullBudgetObject(income, gdp, capita) {
  // Get the budget object
  const budget = getBudgetObject(income, gdp, capita);

  // Create fullBudget object using the spread operator and ES6 method properties
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  // Return fullBudget object
  return fullBudget;
}
