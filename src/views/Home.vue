<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
import store from '@/store.js';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}

img {
  max-width: 200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
</style>
