<template>
  <div id="books">
    <b-header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import BHeader from './components/Header.vue';

export default {
  components: {
    BHeader
  },
  mounted() {
    this.getCategories();
    this.getBooks();
  },
  methods: {
    ...mapActions(['getCategories', 'getBooks'])
  }
};
</script>
