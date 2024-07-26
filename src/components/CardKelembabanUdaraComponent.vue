<template>
  <div class="card border-left-primary shadow py-3 mb-4">
    <div class="card-body">
      <div class="row no-gutters align-items-center">
        <div class="col mr-2">
          <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Kelembaban Udara</div>
          <div class="row no-gutters align-items-center">
            <div class="col-auto">
              <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800"><span id="text-kelembaban-tanah" v-text="kelembabanUdara"></span>%</div>
            </div>
            <div class="col">
              <div class="progress progress-sm mr-2">
                <div class="progress-bar bg-primary" role="progressbar" aria-valuemin="0" id="bar-kelembaban-tanah" aria-valuemax="100" :style="{ width: kelembabanUdara + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <i class="fas fa-hand-holding-droplet fa-2x text-gray-300"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/config";

export default {
  name: "CardKelembabanUdaraComponent",
  data() {
    return {
      kelembabanUdara: null,
    };
  },
  mounted() {
    db.ref("realtimeData")
      .child("kelembabanUdara")
      .on("value", (snapshot) => {
        this.kelembabanUdara = snapshot.val();
      });
  },
};
</script>

<style></style>
