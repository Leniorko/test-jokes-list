<template>
  <div class="joke">
    <p class="joke__text" v-if="joke.type === 'single'">
      {{ joke.joke }}
    </p>
    <div class="joke__text" v-else>
      <details>
        <summary>{{ joke.setup }}</summary>
        {{ joke.delivery }}
      </details>
    </div>
  </div>
</template>

<script>
export default {
  name: "Joke",
  props: {
    joke: {
      require: true,
    },
  },
};
</script>

<style></style>
