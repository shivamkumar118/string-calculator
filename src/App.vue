<template>
  <div class="app-container">
    <StringCalculator />
  </div>
</template>

<script>
import StringCalculator from "./components/StringCalculator.vue";

export default {
  name: "App",
  components: {
    StringCalculator,
  },
};
</script>

<style>
body {
  background: #f4f4f4;
  font-family: Arial, sans-serif;
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
