<template>
  <div id="app">
    <h1 v-once>Harvard Art Museums</h1>
    <p
      v-once
    >Welcome! Here you can find the art produced by different cultures around the world showcased by Harvard Art Museums.</p>
    <button v-on:click="fetchArt()">Uruguayan</button>
    <button v-on:click="fetchArt()">Turkmen</button>
    <button v-on:click="fetchArt()">Swedish</button>
    <button v-on:click="fetchArt()">Bulgarian</button>
    <button v-on:click="fetchArt()">Bohemian</button>
    <hr></hr>
    <p v-if="currentCulture">Current Culture: {{ currentCulture }}</p>
    <ul v-if="currentCulture" class="art-list">
      <li class="art-item" v-for="art in artwork" v-bind:key="art.id">
        <img v-bind:src="`${art.primaryimageurl}`" class="artPiece">
      </li>
    </ul>
    <p v-if="!currentCulture">Choose a culture above to get started!</p>
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
  font-family: "Merriweather", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  font-weight: 300;
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

button {
  width: 18%;
  height: 30px;
  border: none;
  background-color: teal;
  color: white;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  border-radius: 5px;
  margin: 0px 2px;
  cursor: pointer;
  outline: none;
}
</style>
