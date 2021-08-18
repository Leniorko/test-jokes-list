<template>
  <div :class="'joke' + (liked ? ' joke-liked' : '')">
    {{ joke.id }}
    <p class="joke__text" v-if="joke.type === 'single'">
      {{ joke.joke }}
    </p>
    <div class="joke__text" v-else>
      <details>
        <summary>{{ joke.setup }}</summary>
        {{ joke.delivery }}
      </details>
    </div>
    <img
      :src="
        liked
          ? require('../assets/icons/liked.svg')
          : require('../assets/icons/like.svg')
      "
      alt=""
      srcset=""
      @click="changeLikedState(joke.id)"
    />
  </div>
</template>

<script>
export default {
  name: "Joke",
  data() {
    return {
      liked: false,
    };
  },
  mounted() {
    const likes = JSON.parse(localStorage.getItem("likes"));
    if (likes?.includes(this.joke.id)) {
      console.log(this.joke.id);
      this.liked = true;
    } else this.liked = false;
  },

  props: {
    joke: {
      require: true,
    },
  },
  methods: {
    changeLikedState(jokeID) {
      let likes = localStorage.getItem("likes")
        ? JSON.parse(localStorage.getItem("likes"))
        : [];
      if (likes.includes(jokeID)) {
        const likeIndex = likes.indexOf(jokeID);
        likes.splice(likeIndex, 1);
        this.liked = false;
      } else {
        likes.push(jokeID);
        this.liked = true;
      }
      localStorage.setItem("likes", JSON.stringify(likes));
    },
  },
};
</script>

<style></style>
