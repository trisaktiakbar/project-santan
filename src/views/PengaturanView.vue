<template>
  <div id="wrapper">
    <SidebarComponent />

    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <NavbarComponent />

        <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Pengaturan</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action"><i class="fas fa-user"></i>&ensp;Profil</a>
            <a href="#" class="list-group-item list-group-item-action"><i class="fas fa-key"></i>&ensp;Password</a>
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
export default {
  components: {
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style></style>
