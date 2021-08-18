<template>
  <ul>
    <li><joke v-for="joke in jokes" v-bind:key="joke.id" :joke="joke" /></li>
  </ul>
</template>

<script>
import Joke from "./Joke.vue";

export default {
  name: "JokeList",
  components: {
    Joke,
  },
  props: {
    jokes: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style></style>
