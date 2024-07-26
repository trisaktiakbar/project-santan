<template>
  <div id="wrapper">
    <SidebarComponent />

    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <NavbarComponent />

        <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Analitik</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

          <div class="row justify-content-center">
            <div class="col-xl-6">
              <CardSuhuChartComponent />
            </div>
            <div class="col-xl-6">
              <CardKelembabanUdaraChartComponent />
            </div>

            <div class="col-xl-4">
              <CardCurahHujanChartComponent />
            </div>

            <div class="col-xl-4">
              <CardPHTanahChartComponent />
            </div>

            <div class="col-xl-4">
              <CardKelembabanTanahChartComponent />
            </div>

            <div class="col-xl-6">
              <CardPenyinaranMatahariChartComponent />
            </div>

            <div class="col-xl-6">
              <CardIntensitasCahayaChartComponent />
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
import CardSuhuChartComponent from "./../components/CardSuhuChartComponent.vue";
import CardKelembabanUdaraChartComponent from "./../components/CardKelembabanUdaraChartComponent.vue";
import CardPHTanahChartComponent from "./../components/CardPHTanahChartComponent.vue";
import CardKelembabanTanahChartComponent from "./../components/CardKelembabanTanahChartComponent.vue";
import CardCurahHujanChartComponent from "./../components/CardCurahHujanChartComponent.vue";
import CardPenyinaranMatahariChartComponent from "./../components/CardPenyinaranMatahariChartComponent.vue";
import CardIntensitasCahayaChartComponent from "./../components/CardIntensitasCahayaChartComponent.vue";

export default {
  name: "AnalitikView",
  components: {
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    CardSuhuChartComponent,
    CardKelembabanUdaraChartComponent,
    CardPHTanahChartComponent,
    CardKelembabanTanahChartComponent,
    CardCurahHujanChartComponent,
    CardPenyinaranMatahariChartComponent,
    CardIntensitasCahayaChartComponent,
  },
};
</script>

<style></style>
