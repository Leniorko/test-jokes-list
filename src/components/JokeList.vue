<template>
  <ul class="joke-list">
    <li v-for="joke in jokes" v-bind:key="joke.id" class="joke-list__item">
      <joke :joke="joke" />
    </li>
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

<style scoped>
.joke-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.joke-list__item {
  list-style: none;
  display: block;
}
</style>
