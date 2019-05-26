<template>
  <section class="books">
    <h2>Books</h2>
    <b-loading v-if="loading" />
    <ul v-else>
      <li v-for="book in books" :key="book.id">
        <img :src="book.image_url" :alt="book.title" />
        <h4>{{ book.title }}</h4>
        <router-link :to="`/book/${book.id}`">Read</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import BLoading from '../components/Loading.vue';

export default {
  name: 'BBooks',
  components: {
    BLoading
  },
  props: {
    books: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/vars.scss';

ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  li {
    background-color: $gray-bg;
    margin: 0 1.5em 1.5em 0;
    border: 1px solid $gray;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    h4 {
      text-align: center;
      padding: 0 1em;
    }
    a {
      border-top: 1px solid $gray;
      display: block;
      text-align: center;
      padding: 0.25em 1em;
      margin-top: auto; // make sure the read button is always at the bottom of the box
    }
  }
}
</style>
