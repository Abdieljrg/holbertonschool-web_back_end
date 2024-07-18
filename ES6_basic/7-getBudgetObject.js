// Export default function getBudgetObject
export default function getBudgetObject(income, gdp, capita) {
    //create the budget object
    const budget = {
      income,
      gdp,
      capita,
    };
  
    // Return budget object
    return budget;
  }
  