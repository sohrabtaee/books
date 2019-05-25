<template>
  <header>
    <div class="container">
      <router-link to="/" class="logo">
        <img src="../assets/logo.png" alt="Blinkist logo" />
      </router-link>
      <b-navigation />
    </div>
  </header>
</template>

<script>
import BNavigation from './Navigation.vue';

export default {
  name: 'BHeader',
  components: {
    BNavigation
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/vars.scss';

header {
  background-color: $gray-bg;
  height: 80px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
}
</style>
