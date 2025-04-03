export function add(numbers) {
  // Return 0 if the input is empty
  if (!numbers) return 0;

  // Default delimiter: comma (,) or newline (\n)
  let delimiter = /,|\n/;

  numbers = numbers.replace(/\\n/g, "\n");

  // Check if a custom delimiter is specified at the beginning of the input
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");

    // If there are no numbers after the delimiter declaration, return 0
    if (parts.length < 2) {
      return 0;
    }

    // Extract custom delimiter and escape special regex characters
    const customDelimiter = parts[0].substring(2);
    delimiter = new RegExp(
      customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );

    // Remove the delimiter declaration line from the numbers string
    numbers = parts.slice(1).join("\n");
  }

  // Split the numbers using the detected delimiter, parse them to integers,
  // and filter out invalid (NaN) values
  const numArray = numbers
    .split(delimiter)
    .map((num) => parseInt(num, 10))
    .filter((num) => !isNaN(num));

  // Validate if there are any negative numbers in the input
  validateNegatives(numArray);

  // Return the sum of the parsed numbers
  return numArray.reduce((sum, num) => sum + num, 0);
}

// Function to check for negative numbers and throw an error if any exist
function validateNegatives(numbers) {
  const negatives = numbers.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }
}
