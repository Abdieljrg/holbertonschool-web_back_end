// Function to get - current year
function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  
  // Export default function getBudgetForCurrentYear
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    // Get current year
    const currentYear = getCurrentYear();
  
    // Create budget object with computed property names
    const budget = {
      [`income-${currentYear}`]: income,
      [`gdp-${currentYear}`]: gdp,
      [`capita-${currentYear}`]: capita,
    };
  
    // Return budget object
    return budget;
  }
  