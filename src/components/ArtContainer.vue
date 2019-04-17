<template>
  <div class="ArtContainer">
    <ul v-if="currentCulture" class="art-list">
      <li class="art-item" v-for="art in artwork[currentCulture]" v-bind:key="art.id">
        <h2 class="art-title">{{art.title}}</h2>
        <div class="art-info">
          <div class="creation-info">
            <h4>CREATION</h4>
            <p>
              <span>Classification</span>
              : {{art.classification}}
            </p>
            <p>
              <span>Dated</span>
              : {{art.dated}}
            </p>
            <p>
              <span>Division</span>
              : {{art.division}}
            </p>
          </div>
          <div class="physical-info">
            <h4>PHYSICAL DESCRIPTIONS</h4>
            <p>
              <span>Medium</span>
              : {{art.medium}}
            </p>
            <p>
              <span>Dimensions</span>
              : {{art.dimensions}}
            </p>
            <a v-bind:href="art.url" target="_blank">View More</a>
          </div>
        </div>
        <div class="image-and-credits">
          <img class="art-image" v-bind:src="`${art.primaryimageurl}`">
          <p class="credit-line">{{ art.creditline }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ArtContainer",
  props: {
    artwork: Object,
    currentCulture: String
  }
};
</script>

<style scoped>
.art-list {
  margin: 0 auto;
  padding: 0;
}

.art-item {
  list-style-type: none;
  margin: auto;
}

.art-info {
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  width: 90%;
  margin: auto;
  background-color: #f5f5f5;
}

.creation-info {
  width: 50%;
}

.physical-info {
  width: 50%;
}

.art-title {
  text-decoration: underline;
  background-color: #f5f5f5;
  margin: 0 auto;
  width: 90%;
  border-radius: 10px 10px 0px 0px;
  padding: 15px 0px;
  letter-spacing: 2px;
}

.art-image {
  max-width: 90%;
  max-height: 500px;
}

p,
a {
  font-size: 14px;
  max-height: 35px;
  overflow: scroll;
}

h4 {
  margin: 5px;
  font-family: Arial;
}

span {
  font-weight: bold;
}

.image-and-credits {
  background-color: #f5f5f5;
  width: 90%;
  margin: auto;
}

.credit-line {
  margin: 0px auto 50px auto;
  background-color: #f5f5f5;
  width: 90%;
  padding: 10px 0px;
}
</style>
