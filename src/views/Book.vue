<template>
  <div class="book">
    <b-loading v-if="loading.books" />
    <template v-else>
      <article v-if="book">
        <h2>{{ book.title }}</h2>
        <p>{{ book.content }}</p>
        <div class="read-more" v-if="accessType === 'free'">
          <button class="primary">Subscribe to read</button>
        </div>
      </article>
      <p v-else>Book not found.</p>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import BLoading from '../components/Loading.vue';

export default {
  name: 'Book',
  components: {
    BLoading
  },
  data() {
    return {
      bookId: null
    };
  },
  computed: {
    book() {
      // prevent finding the book if there is no book id
      if (!this.bookId) {
        return null;
      }
      // I have re-used the books array instead of calling the API
      // but in the case of huge amount of records, or pagination
      // or considering when a user opens a link directly to this page
      // it would be better to fetch the book from the API
      // but for this short list, I decided to find the book from list of the books
      const book = this.books.find(book => book.id === this.bookId);
      // if the user has free account, show them half of the content
      if (book && this.accessType !== 'premium') {
        book.content = book.content.slice(0, book.content.length / 2);
      }
      return book;
    },
    ...mapState(['accessType', 'books', 'loading'])
  },
  mounted() {
    if (this.$route.params.bookId) {
      this.bookId = this.$route.params.bookId;
    } else {
      // return to discover page if there is no book id
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss">
.book {
  padding: 2em 0;
}
article {
  position: relative;
}
.read-more {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 5em;
  background-image: linear-gradient(to bottom, transparent, #fff);
}
</style>
