<template>
  <div class="loading"></div>
</template>

<script>
export default {
  name: 'BLoading'
};
</script>

<style lang="scss" scoped>
@import '../assets/vars.scss';

div {
  border: 3px solid $gray-bg;
  border-top-color: $green;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
