<template>
  <div id="wrapper">
    <SidebarComponent />

    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <NavbarComponent />

        <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Laporan</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Log Data Tanaman</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr class="text-center">
                      <th class="align-middle">Tanggal</th>
                      <th class="align-middle">pH Tanah</th>
                      <th class="align-middle">Kelembaban Tanah</th>
                      <th class="align-middle">Kelembaban Udara</th>
                      <th class="align-middle">Suhu</th>
                      <th class="align-middle">Curah Hujan</th>
                      <th class="align-middle">Cuaca</th>
                      <th class="align-middle">Intensitas Cahaya</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr class="text-center">
                      <th class="align-middle">Tanggal</th>
                      <th class="align-middle">pH Tanah</th>
                      <th class="align-middle">Kelembaban Tanah</th>
                      <th class="align-middle">Kelembaban Udara</th>
                      <th class="align-middle">Suhu</th>
                      <th class="align-middle">Curah Hujan</th>
                      <th class="align-middle">Cuaca</th>
                      <th class="align-middle">Intensitas Cahaya</th>
                    </tr>
                  </tfoot>
                  <tbody id="table-body">
                    <tr v-for="(item, index) in data" :key="index" class="text-center">
                      <td v-text="formatDate(index)"></td>
                      <td v-text="item.pHTanah + ' pH'"></td>
                      <td v-text="item.kelembabanTanah + '%'"></td>
                      <td v-text="item.kelembabanUdara + '%'"></td>
                      <td v-text="item.suhuRataRata + '°C'"></td>
                      <td v-text="item.curahHujan + ' mm'"></td>
                      <td v-text="item.cuaca"></td>
                      <td v-text="item.intensitasCahaya + ' Cd'"></td>
                    </tr>
                  </tbody>
                </table>
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
import { db } from "../firebase/config";
import { DateTimeFormatMixin } from "./../mixins/DateTimeFormatMixin";
import SidebarComponent from "./../components/SidebarComponent.vue";
import NavbarComponent from "./../components/NavbarComponent.vue";
import FooterComponent from "./../components/FooterComponent.vue";

export default {
  mixins: [DateTimeFormatMixin],
  components: {
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {},
  mounted() {
    db.ref("logData")
      .orderByKey()
      .on(
        "value",
        (snapshot) => {
          this.data = snapshot.val();
          console.log(this.data);
        },
        (error) => {
          console.log(error);
        }
      );
  },
};
</script>

<style></style>
