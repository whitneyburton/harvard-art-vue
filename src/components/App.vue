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
    <p class="current-culture" v-if="currentCulture">Current Culture: {{ currentCulture }}</p>
    <hr></hr>
    <ul v-if="currentCulture" class="art-list">
      <li class="art-item" v-for="art in artwork" v-bind:key="art.id">
        <h2 class="art-title">{{art.title}}</h2>
        <div class="art-info">
          <div class="creation-info">
            <h4>CREATION</h4>
            <p>Classification: {{art.classification}}</p>
            <p>Dated: {{art.dated}}</p>
            <p>Division: {{art.division}}</p>
          </div>
          <div class="physical-info">
            <h4>PHYSICAL DESCRIPTIONS</h4>
            <p>Medium: {{art.medium}}</p>
            <p>Dimensions: {{art.dimensions}}</p>
            <a v-bind:href=art.url target="_blank">View More</a>

          </div>
        </div>
          <img class="art-image" v-bind:src="`${art.primaryimageurl}`">
      </li>
    </ul>
    <p v-if="!currentCulture">Choose a culture above to get started!</p>
  </div>
</template>

<script>
import { apiKey } from "../../api_key.js";
import ArtContainer from "./ArtContainer.vue";

export default {
  name: "app",
  components: { ArtContainer },
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

<style scoped>
#app {
  font-family: "Nanum Myeongjo", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  font-weight: 300;
}

.current-culture {
  font-size: 20px;
}

.art-list {
  margin: 0;
  padding: 0;
}

.art-item {
  list-style-type: none;
  margin: auto;
}

.art-info {
  display: flex;
  border: 1px solid whitesmoke;
  background-repeat: no-repeat;
  background-size: cover;
  width: 70%;
  margin: auto;
  background-color: whitesmoke;
}

.creation-info {
  width: 50%;
}

.physical-info {
  width: 50%;
}

.art-title {
  text-decoration: underline;
  background-color: whitesmoke;
  margin: 0 auto;
  width: 70%;
  border-radius: 10px 10px 0px 0px;
  padding-top: 10px;
}

.art-image {
  width: 70%;
  margin-bottom: 50px;
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

p,
a {
  font-size: 14px;
}

h4 {
  margin: 5px;
}

hr {
  margin: 0px 0px 30px 0px;
}
</style>
