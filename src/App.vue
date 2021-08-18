<template>
  <SearchJokePage />
</template>

<script>
import SearchJokePage from "./pages/SearchJokePage.vue";

export default {
  name: "App",
  components: {
    SearchJokePage,
  },
};
</script>

<style>
/* Global styles */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
}
</style>
