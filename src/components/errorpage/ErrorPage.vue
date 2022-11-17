<template>
  <div class="Error-page-Details">
    <img src="@/assets/erropage.jpg" class="rounded d-block mx-auto" />
    <div>
      <button type="button" @click="goBack()" class="btn btn-danger button">
        Go Back
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "ErrorPageDetails",
  components: {},
  methods: {
    goBack() {
      this.$router.push({ name: "HomeView" });
    },
  },
};
</script>

<style lang="scss" scoped>
.Error-page-Details {
  text-align: center;
  .button {
    display: inline-block;
    width: 20%;
  }
}
</style>
