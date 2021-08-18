<template>
  <input
    type="text"
    name=""
    id=""
    :value="searchQuery"
    @input="$emit('update:searchQuery', $event.target.value)"
    placeholder="Search"
  />
</template>

<script>
export default {
  name: "Searchbar",
  props: {
    searchQuery: String,
  },
};
</script>

<style></style>
