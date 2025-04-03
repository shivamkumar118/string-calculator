<template>
  <div>
    <h1>String Calculator</h1>
    <input placeholder="Enter numbers" />
    <button>Calculate</button>
    <p>Result:</p>
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
