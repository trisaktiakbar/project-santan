<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
      <h6 class="m-0 font-weight-bold text-primary">Intensitas Cahaya</h6>
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

    <div class="card-body pb-4 mb-3 mt-1 pt-5">
      <div>
        <canvas id="chartIntensitasCahaya" class="w-100"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/config";
import { ChartMixin } from "../mixins/ChartMixin";
import { GetDaysMixin } from "../mixins/GetDaysMixin";
import { DateTimeFormatMixin } from "../mixins/DateTimeFormatMixin";

export default {
  name: "CardIntensitasCahayaChartComponent",
  mixins: [ChartMixin, GetDaysMixin, DateTimeFormatMixin],
  data() {
    return {
      last30days: [],
      intensitasCahaya: {
        data: [],
        labels: [],
      },
    };
  },
  methods: {
    resultData(items) {
      this.logData = items.val();
      this.last30days = this.getLast30Days();

      this.intensitasCahaya.data = [];
      this.intensitasCahaya.labels = [];

      this.last30days.forEach((e) => {
        this.intensitasCahaya.labels.push(e);
        this.intensitasCahaya.data.push(this.logData[e] ? this.logData[e].intensitasCahaya : null);
      });

      this.createChart("chartIntensitasCahaya", "line", this.intensitasCahaya.labels, this.intensitasCahaya.data);
    },
    errorData(error) {
      console.log(error);
    },
  },
  mounted() {
    db.ref("logData").orderByKey().limitToLast(30).on("value", this.resultData, this.errorData);
  },
};
</script>

<style></style>
