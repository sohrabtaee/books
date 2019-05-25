<template>
  <div class="login">
    <b-loading v-if="loading.user" />
    <button class="primary" @click="login" v-else>Login</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import BLoading from '../components/Loading.vue';

export default {
  name: 'Login',
  components: {
    BLoading
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    ...mapActions(['login'])
  }
};
</script>

<style lang="scss">
.login {
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
</style>
