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
    add(numbers) {
      if (!numbers) return 0;

      const numArray = numbers.split(/,|\n/).map((num) => parseInt(num, 10));
      return numArray.reduce((sum, num) => sum + num, 0);
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
