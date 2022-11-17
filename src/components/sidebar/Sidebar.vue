<template>
  <div>
    <ul class="sidebar-nav">
      <router-link
        tag="li"
        v-for="(eachCar, i) in carTypes"
        :key="i"
        :to="{ name: 'EacCar', params: { carType: eachCar.carName }}"
      >
        <a> {{ eachCar.carName }} </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
import carTypes from "@/json/carTypes.json";
// @ is an alias to /src
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidear",
  data() {
    return {
      carTypes: carTypes,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-nav {
  li {
    list-style: none;
    width: 100%;
    border-bottom: 3px solid white;
    background-color: #333;
    a {
      padding: 10px;
      text-decoration: none;
      color: white;
      display: block;
      font-weight: bold;
    }
  }
}
</style>
