<template>
  <div>
    <ul class="nav">
      <router-link
        tag="li"
        :to="{ name: 'HomeView', params: { pagetitle: 'Home' } }"
        exact
      >
        <a>Home</a>
      </router-link>
      <router-link
        tag="li"
        :to="{ name: 'ApoutView', params: { pagetitle: 'About' } }"
      >
        <a>About</a>
      </router-link>
      <router-link
        tag="li"
        :to="{ name: 'ContactView', params: { pagetitle: 'Contact' } }"
      >
        <a>Contact</a>
      </router-link>
      <router-link
        tag="li"
        :to="{ name: 'CategoriesView', params: { pagetitle: 'Categories' } }"
      >
        <a>Categories</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.nav {
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  li {
    display: inline-block;
    margin: 0 5px;
    a {
      padding: 10px;
      display: block;
      text-decoration: none;
      color: #222;
      font-weight: bold;
    }
  }
}
li.router-link-exact-active {
  border-bottom: 3px solid rgb(112, 235, 240);
  a {
    color: rgb(112, 235, 240);
  }
}
</style>
