<template>
  <div class="calculator">
    <h1>String Calculator</h1>
    <input placeholder="Enter numbers" />
    <button>Calculate</button>
    <p>Result:</p>
    <p class="error"></p>
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