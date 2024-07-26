<template>
  <div class="card border-left-warning shadow py-3 mb-lg-n3">
    <div class="card-body">
      <div class="row no-gutters align-items-center">
        <div class="col mr-2">
          <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Intensitas Cahaya</div>
          <div class="h5 mb-0 font-weight-bold text-gray-800" id="text-intensitas-cahaya"><span v-text="intensitasCahaya"></span> Cd</div>
        </div>
        <div class="col-auto">
          <i class="fas fa-ruler-vertical fa-2x text-gray-300"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/config";

export default {
  name: "CardIntensitasCahayaComponent",
  data() {
    return {
      intensitasCahaya: null,
    };
  },
  mounted() {
    db.ref("realtimeData")
      .child("intensitasCahaya")
      .on("value", (snapshot) => {
        this.intensitasCahaya = snapshot.val();
      });
  },
};
</script>

<style></style>
