export function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatch) {
      delimiter = new RegExp(delimiterMatch[1]);
      numbers = numbers.split("\n").slice(1).join("\n");
    }
  }

  const parsedNumbers = numbers
    .split(delimiter)
    .map((num) => parseInt(num, 10));
  validateNegatives(parsedNumbers);

  return parsedNumbers.reduce((sum, num) => sum + num, 0);
}

export function validateNegatives(numbers) {
  const negatives = numbers.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }
}
