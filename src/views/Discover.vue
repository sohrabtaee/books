<template>
  <div class="discover">
    <b-categories
      :categories="categories"
      :category-id="categoryId"
      :loading="loading.categories"
      @set-category-id="setFilter"
    />
    <b-books :books="filteredBooks" :loading="loading.books" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import BBooks from '../components/Books.vue';
import BCategories from '../components/Categories.vue';

export default {
  name: 'Discover',
  components: {
    BBooks,
    BCategories
  },
  computed: {
    filteredBooks() {
      // filter the books based on the selected category
      if (this.categoryId) {
        return this.books.filter(book => book.category_id === this.categoryId);
      } else {
        // return all books if no category selected
        return this.books;
      }
    },
    ...mapState(['books', 'categories', 'loading'])
  },
  data() {
    return {
      categoryId: ''
    };
  },
  methods: {
    // I could have inlined this simple code in the template
    // but I believe in avoiding JS code in the templates as much as possible
    // keeping the JS part in the script part, makes it easier to test and reason about
    setFilter(categoryId) {
      this.categoryId = categoryId;
    }
  }
};
</script>

<style lang="scss">
@import '../assets/vars.scss';

.discover {
  padding: 2em 0;
}

@media (min-width: 768px) {
  .discover {
    display: flex;
  }
  .categories {
    width: 25%;
  }
  .books {
    width: 75%;
  }
}
</style>
