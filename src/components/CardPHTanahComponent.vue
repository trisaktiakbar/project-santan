<template>
  <div class="card border-left-success shadow py-3 mb-4">
    <div class="card-body">
      <div class="row no-gutters align-items-center">
        <div class="col mr-2">
          <div class="text-xs font-weight-bold text-success text-uppercase mb-1">pH Tanah</div>
          <div class="row no-gutters align-items-center">
            <div class="col-auto">
              <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800"><span id="text-ph-tanah" v-text="pHTanah"></span> pH</div>
            </div>
            <div class="col">
              <div class="progress progress-sm mr-2">
                <div class="progress-bar bg-success" role="progressbar" id="bar-ph-tanah" aria-valuemin="0" aria-valuemax="100" :style="{ width: (pHTanah / 14) * 100 + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <i class="fas fa-syringe fa-2x text-gray-300"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/config";

export default {
  name: "CardPHTanahComponent",
  data() {
    return {
      pHTanah: null,
    };
  },
  mounted() {
    db.ref("realtimeData")
      .child("pHTanah")
      .on("value", (snapshot) => {
        this.pHTanah = snapshot.val();
      });
  },
};
</script>

<style></style>
