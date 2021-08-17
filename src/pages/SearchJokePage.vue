<template>
  <div class="search">
    <searchbar />
    <joke-list />
  </div>
</template>

<script>
import JokeList from "../components/JokeList.vue";
import Searchbar from "../components/Searchbar.vue";

export default {
  name: "SearchJokePage",
  components: {
    JokeList,
    Searchbar,
  },
};
</script>

<style></style>
