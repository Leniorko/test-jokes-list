<template>
  <div class="search">
    <searchbar v-model:searchQuery="searchQuery" />
    <joke-list
      v-if="fetchedJokes.jokes"
      :jokes="filteredJokes ? filteredJokes : fetchedJokes.jokes"
    />
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
      filteredJokes: undefined,
    };
  },
  beforeCreate() {
    const apiService = new JokesApiService();
    apiService.fetchJokes((json) => {
      this.fetchedJokes = json;
    });
  },
  watch: {
    // Filtering jokes depending on searchQuery
    searchQuery: function () {
      this.filteredJokes = this.fetchedJokes.jokes.filter((joke) => {
        if (joke.joke) {
          if (joke.joke.search(this.searchQuery) !== -1) {
            return true;
          }
        } else if (joke.setup && joke.delivery) {
          if (
            joke.setup.search(this.searchQuery) !== -1 ||
            joke.delivery.search(this.searchQuery) !== -1
          ) {
            return true;
          }
        }
        return false;
      });
      return false;
    },
  },
};
</script>

<style scoped>
.search {
  max-width: 70ch;
  margin: 32px auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 6px;
}

.loading {
  width: fit-content;
  margin: auto;
  padding-top: 32px;
  font-size: 32px;
}
</style>
