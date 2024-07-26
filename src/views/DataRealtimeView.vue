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

          <div class="row justify-content-center">
            <div class="col-xl-3 col-md-6 mb-3">
              <CardPenyinaranMatahariComponent />
            </div>

            <div class="col-xl-3 col-md-6 mb-3">
              <CardCuacaComponent />
            </div>

            <div class="col-xl-6 col-lg-12 mb-3">
              <div><CardKelembabanUdaraComponent /> <CardKelembabanTanahComponent /></div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-4 col-md-6 mb-4">
              <CardSuhuComponent />
            </div>

            <div class="col-xl-4 col-md-6 mb-4">
              <CardPHTanahComponent />
            </div>

            <div class="col-xl-4 col-md-12 mb-4">
              <CardIntensitasCahayaComponent />
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
import CardPenyinaranMatahariComponent from "./../components/CardPenyinaranMatahariComponent.vue";
import CardCuacaComponent from "./../components/CardCuacaComponent.vue";
import CardKelembabanUdaraComponent from "./../components/CardKelembabanUdaraComponent.vue";
import CardKelembabanTanahComponent from "./../components/CardKelembabanTanahComponent.vue";
import CardSuhuComponent from "./../components/CardSuhuComponent.vue";
import CardPHTanahComponent from "./../components/CardPHTanahComponent.vue";
import CardIntensitasCahayaComponent from "./../components/CardIntensitasCahayaComponent.vue";

export default {
  name: "DataRealtimeView",
  components: {
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    CardPenyinaranMatahariComponent,
    CardCuacaComponent,
    CardKelembabanUdaraComponent,
    CardKelembabanTanahComponent,
    CardSuhuComponent,
    CardPHTanahComponent,
    CardIntensitasCahayaComponent,
  },
};
</script>

<style></style>
