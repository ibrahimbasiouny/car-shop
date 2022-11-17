<template>
  <div class="justify-content-evenly row">
    <div class="col-8">
      <div>
        <img
          v-if="
            mainImageIs.length < 1
              ? (mainImageIs = getImageUrl(
                  getCarInfo.name,
                  getCarInfo.mainImage
                ))
              : mainImageIs
          "
          :src="mainImageIs"
          class="rounded mx-auto d-block mainImage"
        />
      </div>
      <div class="justify-content-center row">
        <img
          v-for="(eachCarImage, x) in getCarInfo.images"
          :src="getImageUrl(getCarInfo.name, eachCarImage)"
          @click="mainImageIs = getImageUrl(getCarInfo.name, eachCarImage)"
          :key="x"
          class="rounded mx-auto d-block thumnailImage"
        />
      </div>
    </div>
    <div class="col-4 info">
      <div class="info1">
        <h2>{{ getCarInfo.name }} || {{ getCarInfo.model }}</h2>
        <p>Year => {{ getCarInfo.year }}</p>
        <p>File Number => {{ getCarInfo.fileNumber }}</p>
        <p>Description => {{ getCarInfo.description }}</p>
        <p>Uploaded On => {{ getCarInfo.uploadedon }}</p>
        <p>Price => {{ getCarInfo.price }}</p>
      </div>
      <button type="button" @click="goBack()" class="btn btn-danger button">
        back to Home
      </button> 
    </div>
  </div>
</template>

<!-- getImageUrl(getCarInfo.name, getCarInfo.mainImage) -->
<script>
// @ is an alias to /src
import getCarInfo from "@/json/cars.json";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CarInfo",
  data() {
    return {
      myCarDetails: getCarInfo,
      carName: this.$route.params.carName,
      carFileId: this.$route.params.carFileId,
      mainImageIs: "",
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
      let carData = "";
      for (let i = 0; i < this.myCarDetails.length; i++) {
        if (this.myCarDetails[i].fileNumber == this.carFileId) {
          carData = this.myCarDetails[i];
          break;
        }
      }
      return carData;
    },
  },
};
</script>

<style lang="scss" scoped>
.mainImage {
  width: 800px;
  height: 500px;
  border: 10px solid #aaa;
  margin-bottom: 20px;
}
.thumnailImage {
  width: 200px;
  border: 5px solid #aaa;
}
.info {
  text-align: center;
  .info1 {
    border: 5px solid #aaa;
    padding: 20px;
    margin-bottom: 20px;
  }
  .button {
    display: inline;
    width: 50%;
  }
}
</style>
