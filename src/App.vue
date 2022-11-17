<template>
  <div id="app" class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
const components = {
  Navbar,
};
export default {
  components,
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
