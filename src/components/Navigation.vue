<template>
  <nav>
    <ul>
      <li v-if="userId">
        <button class="link" @click="logout">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'BNavigation',
  computed: {
    ...mapState(['userId'])
  },
  methods: {
    ...mapActions(['logout'])
  }
};
</script>

<style lang="scss" scoped>
button.link {
  line-height: 80px;
}
</style>
