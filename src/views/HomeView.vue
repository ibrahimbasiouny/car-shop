<template>
  <div class="home row">
    <div class="col-2">
      <Sidebar :carsData="myCars" />
    </div>
    <div class="col-10">
      <Cars :carsData="myCars" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Cars from "@/components/cars/Cars.vue";
import getCarsJson from "@/json/cars.json";
const components = {
  Sidebar,
  Cars,
};
export default {
  name: "HomeView",
  data() {
    return {
      myCars: getCarsJson,
    };
  },
  components,
};
</script>
