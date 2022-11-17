<template>
  <div class="error-page">
    <ErrorPageDetails />
  </div>
</template>

<script>
// @ is an alias to /src
import ErrorPageDetails from "@/components/errorpage/ErrorPage.vue";
const components = {
  ErrorPageDetails,
};
export default {
  name: "ErrorPage",
  components,
};
</script>
