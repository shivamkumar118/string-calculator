<template>
  <div class="calculator">
    <h1>String Calculator</h1>
    <input v-model="inputString" placeholder="Enter numbers..." />
    <button @click="calculate">Calculate</button>
    <p v-if="result !== null">Result: {{ result }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { add } from "@/utils/calculator.js";

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
      try {
        this.errorMessage = "";
        this.result = add(this.inputString);
      } catch (error) {
        this.errorMessage = error.message;
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
