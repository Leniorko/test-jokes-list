<template>
  <div class="search">
    <searchbar v-model:searchQuery="searchQuery" />
    <joke-list v-if="fetchedJokes.jokes" :jokes="fetchedJokes.jokes" />
    <div class="loading" v-else><p>Loading...</p></div>
  </div>
</template>

<script>
import JokeList from "../components/JokeList.vue";
import Searchbar from "../components/Searchbar.vue";
import JokesApiService from "../services/JokeApiService";
import { JokesRequestResult } from "../models/JokesRequestResult";

export default {
  name: "SearchJokePage",
  components: {
    JokeList,
    Searchbar,
  },
  data() {
    return {
      fetchedJokes: new JokesRequestResult(),
      searchQuery: "",
    };
  },
  beforeCreate() {
    const apiService = new JokesApiService();
    apiService.fetchJokes((json) => {
      this.fetchedJokes = json;
    });
  },
};
</script>

<style></style>
