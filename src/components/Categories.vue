<template>
  <aside class="categories">
    <h3>Categories</h3>
    <b-loading v-if="loading" />
    <ul v-else>
      <li>
        <button
          class="link"
          @click="setCategoryId()"
          :class="{ active: !categoryId }"
        >
          All
        </button>
      </li>
      <li v-for="category in categories" :key="category.id">
        <button
          class="link"
          @click="setCategoryId(category.id)"
          :class="{ active: category.id === categoryId }"
        >
          {{ category.title }}
        </button>
      </li>
    </ul>
  </aside>
</template>

<script>
import BLoading from '../components/Loading.vue';

export default {
  name: 'BCategories',
  components: {
    BLoading
  },
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    categoryId: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setCategoryId(id) {
      this.$emit('set-category-id', id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/vars.scss';

ul {
  padding-left: 1em;
  margin-bottom: 2em;
  .active {
    color: $green;
    text-decoration: underline;
  }
}
</style>
