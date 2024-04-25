/**
 * Calculates the factorial of a number.
 *
 * @param {number} number The number to calculate the factorial of.
 * @returns {number} The factorial of the number.
 */
function factorial(number) {
  // If the number is negative, throw an error
  if (number < 0) {
    throw new Error("Negative numbers are not allowed.");
  }
  // Multiply the numbers from 1 to n
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  // Return the result
  return result;
}

// Test the factorial function
try {
  console.log(factorial(5)); // Output: 120
  console.log(factorial(0)); // Output: 1
  console.log(factorial(-1)); // Output: Error: Negative numbers are not allowed.
} catch (error) {
  console.error(error);
}
