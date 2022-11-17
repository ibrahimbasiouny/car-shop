<template>
  <div class="justify-content-evenly row">
    <div class="col-4 each-car" v-for="(eachCar, i) in getCarInfo" :key="i">
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
    <br />
    <div class="button">
      <button type="button" @click="goBack()" class="btn btn-danger button">
        back to Home
      </button>
    </div>
  </div>
</template>

<script>
import getCarJson from "@/json/cars.json";
export default {
  name: "EachCar",
  data() {
    return {
      myCarDetails: getCarJson,
      carType: this.$route.params.carType,
    };
  },
  methods: {
    getImageUrl(folderName, imageName) {
      let image = require.context("@/assets/");
      return image("./" + folderName + "/" + imageName);
    },
    goBack() {
      this.$router.push({ name: "HomeView" });
    },
  },
  computed: {
    getCarInfo() {
      let carData = [];
      for (let i = 0; i < this.myCarDetails.length; i++) {
        if (this.myCarDetails[i].name == this.carType) {
          carData.push(this.myCarDetails[i]);
        }
      }
      return carData;
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
.button {
  display: inline;
  width: 50%;
}
</style>
