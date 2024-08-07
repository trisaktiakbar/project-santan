<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
      <h6 class="m-0 font-weight-bold text-primary">Rekomendasi Tanaman</h6>
      <div class="dropdown no-arrow">
        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
          <div class="dropdown-header">Dropdown Header:</div>
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>

    <div class="card-body pb-3">
      <p class="my-5 text-center pt-5 pb-4" v-if="!data.rekomendasiTanaman">Memproses ...</p>
      <div class="text-start pt-3 pb-5">
        <div v-for="(item, index) in data.rekomendasiTanaman" :key="index" :class="{ 'text-primary': index < 1, 'text-success': index >= 1 && index < 3, 'mb-xl-2 py-xl-1': true, h5: index < 3, h6: index >= 3 }">
          <i class="fas fa-circle"></i>&ensp;<span v-text="formatStringTanaman(item)"></span>
        </div>
      </div>
      <button class="btn btn-primary btn-sm w-100 mb-2 mt-3">Refresh</button>
    </div>
  </div>
</template>

<script>
// import { getKNNModel, minMaxNormalizationAll } from "@/libs/green-api/green-api.js";
import { minMaxNormalizationAll } from "@/libs/green-api/green-api.js";
import { db } from "./../firebase/config";
import { GetDaysMixin } from "./../mixins/GetDaysMixin";
import { DateTimeFormatMixin } from "./../mixins/DateTimeFormatMixin";
import { PerformPredictMixin } from "./../mixins/PerformPredictMixin";
import axios from "axios";

export default {
  name: "CardRekomendasiTanamanComponent",
  mixins: [GetDaysMixin, DateTimeFormatMixin, PerformPredictMixin],
  data() {
    return {
      last30days: [],
      data: {
        rekomendasiTanaman: [],
      },
      logData: [],
      inputModel: [],
      predictions: {
        results: {},
        average: {},
      },
    };
  },
  methods: {
    getAverage(arr) {
      let total = arr.reduce(function (a, b) {
        return a + b; // c
      }, 0);
      return total / arr.length;
    },

    async resultData(items) {
      this.logData = items.val();
      this.last30days = this.getLast30Days();
      this.data = [];
      this.last30days.forEach((e) => {
        this.data.push(this.logData[e] ? this.logData[e] : null);
      });
      this.inputModel = this.data.map((arr) => {
        return [arr.suhuMinimum, arr.suhuMaksimum, arr.suhuRataRata, arr.kelembabanUdara, arr.curahHujan, arr.penyinaranMatahari];
      });
      this.inputModel = minMaxNormalizationAll(this.inputModel);
      // console.log("Tn");
      this.predictions.results.Tn = await this.performPredict("Tn", this.inputModel);
      this.predictions.average.Tn = this.getAverage(this.predictions.results.Tn);
      // console.log("Tx");
      this.predictions.results.Tx = await this.performPredict("Tx", this.inputModel);
      this.predictions.average.Tx = this.getAverage(this.predictions.results.Tx);
      // console.log("Tavg");
      this.predictions.results.Tavg = await this.performPredict("Tavg", this.inputModel);
      this.predictions.average.Tavg = this.getAverage(this.predictions.results.Tavg);
      // console.log("RH_avg");
      this.predictions.results.RH_avg = await this.performPredict("RH_avg", this.inputModel);
      this.predictions.average.RH_avg = this.getAverage(this.predictions.results.RH_avg);
      // console.log("RR");
      this.predictions.results.RR = await this.performPredict("RR", this.inputModel);
      this.predictions.average.RR = this.getAverage(this.predictions.results.RR);
      // console.log("ss");
      this.predictions.results.ss = await this.performPredict("ss", this.inputModel);
      this.predictions.average.ss = this.getAverage(this.predictions.results.ss);

      console.log(this.predictions);
      let inputKNN = `suhu=${this.predictions.average.Tavg}&kelembaban_udara=${this.predictions.average.RH_avg}&ph_tanah=${this.data.pHTanah}&curah_hujan=${this.predictions.average.RR}`;

      console.log(inputKNN);

      axios
        .get("https://greenjs-api.vercel.app/plant?" + inputKNN)
        .then((response) => {
          this.data.rekomendasiTanaman = response.data.rekomendasi_tanaman;
          console.log(this.data.rekomendasiTanaman);
        })
        .catch((error) => console.log(error));
    },
    errorData(error) {
      console.log(error);
    },
    formatStringTanaman(str) {
      if (str !== null) {
        const words = str.split("_");
        const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
        const result = capitalizedWords.join(" ");
        return result;
      } else {
        return null;
      }
    },
  },
  mounted() {
    db.ref("realtimeData")
      .child("pHTanah")
      .on(
        "value",
        (snapshot) => {
          this.data.pHTanah = snapshot.val();
        },
        (error) => {
          console.error("Error getting data:", error);
        }
      );
    db.ref("logData").orderByKey().limitToLast(30).on("value", this.resultData, this.errorData);
  },
};
</script>

<style></style>
