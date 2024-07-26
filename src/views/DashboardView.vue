<template>
  <div id="wrapper">
    <SidebarComponent />

    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <NavbarComponent />
        <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

          <div class="row">
            <div class="col-xl-4 col-md-6 mb-4">
              <CardKelembabanTanahComponent></CardKelembabanTanahComponent>
            </div>

            <div class="col-xl-4 col-md-6 mb-4">
              <CardPHTanahComponent></CardPHTanahComponent>
            </div>

            <div class="col-xl-4 col-md-12 mb-4">
              <CardKelembabanUdaraComponent></CardKelembabanUdaraComponent>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-xl-5">
              <CardSuhuChartComponent />
            </div>

            <div class="col-lg-4 col-xl-5 mb-3">
              <CardCurahHujanChartComponent />
            </div>

            <div class="col-lg-4 col-xl-2">
              <CardRekomendasiTanamanComponent />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 mb-4">
              <CardPenyinaranMatahariComponent />
            </div>

            <div class="col-lg-4 mb-4">
              <CardCuacaComponent />
            </div>

            <div class="col-lg-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Analisis</h6>
                </div>
                <div class="card-body">
                  <div class="text-center">
                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 15rem" src="/img/undraw_posting_photo.svg" alt="..." />
                  </div>
                  <router-link to="/analitik" class="btn btn-primary">Tampilkan Analisis</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./../components/SidebarComponent.vue";
import NavbarComponent from "./../components/NavbarComponent.vue";
import FooterComponent from "./../components/FooterComponent.vue";
import CardKelembabanUdaraComponent from "../components/CardKelembabanUdaraComponent.vue";
import CardKelembabanTanahComponent from "../components/CardKelembabanTanahComponent.vue";
import CardPHTanahComponent from "../components/CardPHTanahComponent.vue";
import CardSuhuChartComponent from "../components/CardSuhuChartComponent.vue";
import CardCurahHujanChartComponent from "../components/CardCurahHujanChartComponent.vue";
import CardPenyinaranMatahariComponent from "../components/CardPenyinaranMatahariComponent.vue";
import CardCuacaComponent from "../components/CardCuacaComponent.vue";
import CardRekomendasiTanamanComponent from "../components/CardRekomendasiTanamanComponent.vue";
import { ChartMixin } from "./../mixins/ChartMixin";
import { GetDaysMixin } from "./../mixins/GetDaysMixin";
import { DateTimeFormatMixin } from "./../mixins/DateTimeFormatMixin";
import { UserMixin } from "../mixins/UserMixin.js";

export default {
  mixins: [ChartMixin, GetDaysMixin, DateTimeFormatMixin, UserMixin],
  name: "DashboardView",
  components: {
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    CardKelembabanUdaraComponent,
    CardKelembabanTanahComponent,
    CardPHTanahComponent,
    CardSuhuChartComponent,
    CardCurahHujanChartComponent,
    CardPenyinaranMatahariComponent,
    CardCuacaComponent,
    CardRekomendasiTanamanComponent,
  },
  data() {
    return {};
  },
  methods: {},

  mounted() {
    this.auth();
  },
};
</script>

<style scoped></style>
