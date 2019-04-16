<template>
  <div id="app">
    <h1 v-once>Harvard Art Museums</h1>
    <h3
      v-once
    >Welcome! Here you can find the art produced by different cultures around the world showcased by Harvard Art Museums.</h3>
    <button v-on:click="fetchArt()">Uruguayan</button>
    <button v-on:click="fetchArt()">Turkmen</button>
    <button v-on:click="fetchArt()">Swedish</button>
    <button v-on:click="fetchArt()">Bulgarian</button>
    <button v-on:click="fetchArt()">Bohemian</button>
    <hr></hr>
    <h4 v-if="currentCulture">Current Culture: {{ currentCulture }}</h4>
    <ul v-if="currentCulture" class="art-list">
      <li class="art-item" v-for="art in artwork" v-bind:key="art.id">
        <img v-bind:src="`${art.primaryimageurl}`" class="artPiece">
      </li>
    </ul>
    <h4 v-if="!currentCulture">Choose a culture above to get started!</h4>
  </div>
</template>

<script>
import { apiKey } from "../../api_key.js";

export default {
  name: "app",
  components: {},
  data() {
    return {
      error: "",
      artwork: [],
      cultureIDs: {
        Uruguayan: 37528893,
        Turkmen: 37528812,
        Swedish: 37528713,
        Bulgarian: 37527048,
        Bohemian: 37527021
      },
      currentCulture: ""
    };
  },
  methods: {
    fetchArt() {
      const clickedCulture = event.target.innerText;
      const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&culture=${
        this.cultureIDs[clickedCulture]
      }`;
      fetch(url)
        .then(response => response.json())
        .then(result =>
          result.records.filter(culture => culture.primaryimageurl !== null || undefined)
        )
        .then(records => (this.artwork = records))
        .then(records => (this.currentCulture = clickedCulture))
        .catch(error => (this.error = error.message));
    }
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
