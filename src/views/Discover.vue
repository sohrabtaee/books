<template>
  <div class="discover">
    <aside class="categories">
      <h3>Categories</h3>
      <b-loading v-if="loading.categories" />
      <ul v-else>
        <li>
          <button
            class="link"
            @click="setFilter()"
            :class="{ active: !categoryId }"
          >
            All
          </button>
        </li>
        <li v-for="category in categories" :key="category.id">
          <button
            class="link"
            @click="setFilter(category.id)"
            :class="{ active: category.id === categoryId }"
          >
            {{ category.title }}
          </button>
        </li>
      </ul>
    </aside>
    <section class="books">
      <h2>Books</h2>
      <b-loading v-if="loading.books" />
      <ul v-else>
        <li v-for="book in filteredBooks" :key="book.id">
          <img :src="book.image_url" :alt="book.title" />
          <h4>{{ book.title }}</h4>
          <router-link :to="`/book/${book.id}`">Read</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import BLoading from '../components/Loading.vue';

export default {
  name: 'Discover',
  components: {
    BLoading
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
.categories {
  ul {
    padding-left: 1em;
    margin-bottom: 2em;
    .active {
      color: $green;
      text-decoration: underline;
    }
  }
}
.books {
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
        margin-top: auto;
      }
    }
  }
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
