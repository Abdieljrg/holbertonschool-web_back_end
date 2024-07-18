// Export default function appendToEachArrayValue
export default function appendToEachArrayValue(array, appendString) {
    // Initialize an empty array to store new values
    const newArray = [];
    
    // Use a for...of loop to iterate over each element in array
    for (const idx of array) {
      // Append given string to current element and push it to new array
      newArray.push(appendString + idx);
    }
  
    // Return new array with modified values
    return newArray;
  }
  