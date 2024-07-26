<template>
  <div class="card border-left-primary shadow py-3 mb-3">
    <div class="card-body">
      <div class="row no-gutters align-items-center">
        <div class="col mr-2">
          <h4 class="small font-weight-bold text-primary text-uppercase">Suhu</h4>
          <div class="h4 mb-0 font-weight-bold text-gray-800 text-center"><i class="fas fa-temperature-high text-primary"></i>&ensp;<span id="text-suhu" v-text="suhu"></span> °C</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "./../firebase/config";

export default {
  name: "CardSuhuComponent",
  data() {
    return {
      suhu: null,
    };
  },
  mounted() {
    db.ref("realtimeData")
      .child("suhu")
      .on("value", (snapshot) => {
        this.suhu = snapshot.val();
      });
  },
};
</script>

<style></style>
