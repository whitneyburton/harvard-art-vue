<template>
  <div class="ArtContainer">
    <ul v-if="currentCulture" class="art-list">
      <li class="art-item" v-for="art in artwork[currentCulture]" v-bind:key="art.id">
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
          <p class="credit-line">{{ art.creditline }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ArtContainer',
  props: {
    artwork: Object,
    currentCulture: String
  }
}
</script>

<style scoped>
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
  padding: 15px 0px;
  letter-spacing: 2px;
}

.art-image {
  width: 70%;
}

p,
a {
  font-size: 14px;
}

h4 {
  margin: 5px;
  font-family: Arial;
}

.credit-line {
  margin: 0px auto 50px auto;
  background-color: whitesmoke;
  width: 70%;
  padding: 10px 0px;
}

</style>
