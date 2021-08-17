<template>
  <ul>
    <li><Joke /></li>
    <li><Joke /></li>
    <li><Joke /></li>
  </ul>
</template>

<script>
import Joke from "./Joke.vue";

export default {
  name: "JokeList",
  components: {
    Joke,
  },
};
</script>

<style></style>
