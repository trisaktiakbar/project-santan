<template>
  <div class="card border-left-warning shadow pt-2 pb-5">
    <div class="card-body">
      <div class="row no-gutters align-items-center">
        <div class="col mr-2">
          <h4 class="small font-weight-bold text-warning text-uppercase">Penyinaran Matahari</h4>
          <h1 class="display-1 text-center font-weight-bold text-warning"><i class="fas fa-sun"></i></h1>
          <div class="h5 mb-0 font-weight-bold text-gray-800 text-center text-uppercase" id="text-penyinaran-matahari" v-text="penyinaranMatahari"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTimeFormatMixin } from "./../mixins/DateTimeFormatMixin";
import { db } from "../firebase/config";

export default {
  mixins: [DateTimeFormatMixin],
  name: "CardPenyinaranMatahariComponent",
  data() {
    return {
      penyinaranMatahari: null,
    };
  },
  mounted() {
    db.ref("realtimeData").on("value", (snapshot) => {
      this.penyinaranMatahari = snapshot.val().penyinaranMatahari;
      this.penyinaranMatahari = this.minutesToHour(this.penyinaranMatahari);
    });
  },
};
</script>

<style></style>
