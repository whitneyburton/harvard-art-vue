<template>
  <div id="app">
    <h1 v-once>Harvard Art Museums</h1>
    <h3>Welcome! Here you can find the artists, sitters, printers, donors, authors, and publishers of Harvard Art Museums.</h3>
  </div>
</template>

<script>
import { apiKey } from "../../api_key.js";

export default {
  name: "app",
  components: {},
  data() {
    return {
      art: [],
      error: ""
    };
  },
  mounted() {
    const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&culture=37527759`;
    fetch(url)
      .then(response => response.json())
      .then(result => (this.art = [...this.art, result.records]))
      .catch(error => (this.error = error.message));
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
}
</style>
