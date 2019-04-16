<template>
  <div id="app">
    <h1 v-once>Harvard Art Museums</h1>
    <h3 v-once>Welcome! Here you can find the art produced by different cultures around the world showcased by Harvard Art Museums.</h3>
    <button v-on:click="this.currentCulture = 'Uruguayan'">Uruguayan</button>
    <button v-on:click="this.currentCulture = 'Turkmen'">Turkmen</button>
    <button v-on:click="this.currentCulture = 'Swedish'">Swedish</button>
    <button v-on:click="this.currentCulture = 'Bulgarian'">Bulgarian</button>
    <button v-on:click="this.currentCulture = 'Bohemian'">Bohemian</button>
    <ul class="art-list">
      <li class="art-item" v-for="art in artwork" v-bind:key="art.id">
        <img v-bind:src="`${art.primaryimageurl}`" class="artPiece">
      </li>
    </ul>
  </div>
</template>

<script>
import { apiKey } from "../../api_key.js";

export default {
  name: "app",
  components: {},
  data() {
    return {
      artwork: [],
      error: "",
      cultureIDs: {
        'Uruguayan': 37528893,
        'Turkmen': 37528812,
        'Swedish': 37528713,
        'Bulgarian': 37527048,
        'Bohemian': 37527021,
        'NewZealand': 37528182
      },
      currentCulture: 'NewZealand'
    };
  },
  mounted() {
    const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&culture=${
      this.cultureIDs[this.currentCulture]
    }`;
    fetch(url)
      .then(response => response.json())
      .then(result =>
        result.records.filter(culture => culture.primaryimageurl !== null)
      )
      .then(records => (this.artwork = records))
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
  margin-top: 20px;
}

ul {
  height: 75vh;
  overflow: scroll;
}

li {
  list-style-type: none;
}

img {
  width: 80%;
}
</style>
