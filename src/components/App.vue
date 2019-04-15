<template>
  <div id="app">
    <!-- <HelloWorld msg="Harvard Art Lens"/> -->
    <h1>Harvard Art Museums</h1>
    <h3>Welcome! Here you can find the artists, sitters, printers, donors, authors, and publishers of Harvard Art Museums.</h3>
    <p v-if="seen">Testing!</p>
  </div>
</template>

<script>
import fetchData from "../utils/api.js";

export default {
  name: "app",
  components: {},
  data() {
    return {
      artists: [],
      seen: true
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: turquoise;
}
</style>
