<template>
  <div class="justify-content-evenly row">
    <div class="col-4 each-car" v-for="(eachCar, i) in carsInfo" :key="i">
      <img
        :src="getImageUrl(eachCar.name, eachCar.mainImage)"
        class="rounded d-block mx-auto"
      />
      <h3 class="text-center">{{ eachCar.model }}</h3>
      <div>
        <div class="float-start">
          <button type="button" class="btn btn-dark">
            {{ eachCar.price }}
          </button>
        </div>
        <div class="float-end">
          <router-link
            :to="{
              name: 'carInfo',
              params: { carName: eachCar.name, carFileId: eachCar.fileNumber },
            }"
          >
            <button type="button" class="btn btn-primary">More Detailes</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cars",
  data() {
    return {
      carsInfo: this.$attrs.carsData,
    };
  },
  methods: {
    getImageUrl(folderName, imageName) {
      let image = require.context("@/assets/");
      return image("./" + folderName + "/" + imageName);
    },
  },
};
</script>

<style lang="scss" scoped>
.each-car {
  padding: 10px;
  margin-bottom: 10px;
  border: 5px solid #eee;
  img {
    width: 320px;
    height: 200px;
    margin-bottom: 10px;
  }
}
</style>
