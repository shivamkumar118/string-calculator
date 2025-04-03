<template>
  <div class="calculator">
    <h1>String Calculator</h1>
    <div class="input-container">
      <input v-model.trim="inputString" placeholder="Enter numbers..." />
      <button @click="calculate" :disabled="!inputString.trim()">
        Calculate
      </button>
    </div>
    <p v-if="result !== null" class="result">Result: {{ result }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { add } from "@/utils/calculator.js";

export default {
  name: "StringCalculator",
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
  max-width: 420px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

h1 {
  font-size: 24px;
  color: #333;
}

.input-container {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 5px;
  transition: border 0.3s;
}

input:focus {
  border: 2px solid #4caf50;
  outline: none;
}

button {
  padding: 10px 15px;
  font-size: 16px;
  color: white;
  background: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #45a049;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.result {
  font-size: 18px;
  color: #333;
  font-weight: bold;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
