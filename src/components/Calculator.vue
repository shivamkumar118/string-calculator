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