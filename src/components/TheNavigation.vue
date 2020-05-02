<template>
  <nav id="nav">
    <p class="logo">The Vue School Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.name" class="links">
        <router-link :to="{ name: 'DestinationDetails', params: { id: destination.slug } }">{{
          destination.name
        }}</router-link>
      </li>
      <li class="links">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from '@/store';

export default {
  data() {
    return {
      destinationId: this.$route.params.id,
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
#nav {
  display: flex;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>
