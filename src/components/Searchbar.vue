<template>
  <input
    type="text"
    name="searchbar"
    id="searchbar"
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

<style scoped>
#searchbar {
  padding: 6px 0 3px;
  font-size: 16px;
  outline: none;
  border: none;
  border-bottom: solid 2px rgb(156, 146, 146);
}
</style>
