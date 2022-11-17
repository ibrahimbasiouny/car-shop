<template>
  <div class="contact-page">
    <button type="button" @click="goBack()" class="btn btn-danger button">
      back to Home
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "ContactView",
  components: {},
  methods: {
    goBack() {
      this.$router.push({ name: "HomeView" });
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-page {
  text-align: center;
  .button {
    display: inline;
    width: 20%;
  }
}
</style>
