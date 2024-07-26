<template>
  <div class="card border-left-info shadow pt-2 pb-5">
    <div class="card-body">
      <div class="row no-gutters align-items-center">
        <div class="col mr-2">
          <h4 class="small font-weight-bold text-info text-uppercase">Cuaca</h4>
          <h1 class="display-1 text-center font-weight-bold text-info" v-if="cuaca == 'Cerah'"><i class="fas fa-sun"></i></h1>
          <h1 class="display-1 text-center font-weight-bold text-info" v-if="cuaca == 'Cerah Berawan'"><i class="fas fa-cloud-sun"></i></h1>
          <h1 class="display-1 text-center font-weight-bold text-info" v-if="cuaca == 'Berawan'"><i class="fas fa-cloud"></i></h1>
          <h1 class="display-1 text-center font-weight-bold text-info" v-if="cuaca == 'Hujan'"><i class="fas fa-cloud-rain"></i></h1>
          <div class="h5 mb-0 font-weight-bold text-gray-800 text-uppercase text-center" v-text="cuaca"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/config";
export default {
  name: "CardCuacaComponent",
  data() {
    return {
      cuaca: null,
    };
  },
  mounted() {
    db.ref("realtimeData")
      .child("cuaca")
      .on("value", (snapshot) => {
        this.cuaca = snapshot.val();
      });
  },
};
</script>

<style></style>
