<template>
  <div class="calculator">
    <h1>String Calculator</h1>
    <input v-model="inputString" placeholder="Enter numbers..." />
    <button>Calculate</button>
    <p v-if="result !== null">Result: {{ result }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputString: "",
      result: null,
      errorMessage: "",
    };
  },
  methods: {
    calculate() {
      this.result = this.add(this.inputString);
    },
    add(numbers) {
      if (!numbers) return 0;

      let delimiter = /,|\n/;
      if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
        if (delimiterMatch) {
          delimiter = new RegExp(delimiterMatch[1]);
          numbers = numbers.split("\n").slice(1).join("\n");
        }
      }

      const parseNumbers = numbers
        .split(delimiter)
        .map((num) => parseInt(num, 10));
      this.validateNegatives(parseNumbers);

      return parseNumbers.reduce((sum, num) => sum + num, 0);
    },

    validateNegatives(numbers) {
      const negatives = numbers.filter((num) => num < 0);
      if (negatives.length) {
        throw new Error(
          `Negative numbers not allowed: ${negatives.join(", ")}`
        );
      }
    },
  },
};
</script>

<style>
.calculator {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
.error {
  color: red;
}
</style>
