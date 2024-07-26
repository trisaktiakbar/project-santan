<template>
  <ul :class="{ 'navbar-nav': true, 'bg-gradient-primary': true, sidebar: true, 'sidebar-dark': true, accordion: true, toggled: sidebarToggled }" id="accordionSidebar">
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-seedling"></i>
      </div>
      <div class="sidebar-brand-text mx-3">SANTAN</div>
    </a>

    <hr class="sidebar-divider my-0" />

    <li class="nav-item" id="nav-dashboard">
      <router-link class="nav-link" to="/">
        <i class="fas fa-fw fa-grip-vertical"></i>
        <span>Dashboard</span>
      </router-link>
    </li>

    <hr class="sidebar-divider" />

    <div class="sidebar-heading">Media Tanam</div>

    <li class="nav-item" id="nav-data-realtime">
      <router-link class="nav-link" to="/data-realtime">
        <i class="fas fa-fw fa-clock"></i>
        <span>Data Realtime</span>
      </router-link>
    </li>

    <li class="nav-item" id="nav-analitik">
      <router-link class="nav-link" to="/analitik">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Analitik</span>
      </router-link>
    </li>

    <li class="nav-item" id="nav-laporan">
      <router-link class="nav-link" to="/laporan">
        <i class="fas fa-fw fa-paste"></i>
        <span>Laporan</span>
      </router-link>
    </li>

    <hr class="sidebar-divider" />

    <div class="sidebar-heading">Akun</div>

    <li class="nav-item" id="nav-pengaturan">
      <router-link class="nav-link" to="/pengaturan">
        <i class="fas fa-fw fa-cogs"></i>
        <span>Pengaturan</span>
      </router-link>
    </li>

    <li class="nav-item" id="nav-log-out">
      <a class="nav-link text-danger cursor-pointer" @click="logout">
        <i class="fas fa-sign-out-alt fa-chart-area text-danger"></i>
        <span>Log Out</span>
      </a>
    </li>

    <hr class="sidebar-divider" />

    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle" @click="toggleSidebar"></button>
    </div>
  </ul>
</template>

<script>
import { auth } from "@/firebase/config";
import router from "@/router/router";
import Swal from "sweetalert2";

export default {
  name: "SidebarComponent",
  data() {
    return {
      sidebarToggled: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarToggled = !this.sidebarToggled;
    },
    logout() {
      Swal.fire({
        title: "Konfirmasi",
        text: "Anda yakin ingin keluar dari akun?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, keluar",
        cancelButtonText: "Batal",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          auth
            .signOut()
            .then(() => {
              router.push({ name: "Login" });
            })
            .catch((error) => {
              console.error("Error logging out:", error);
            });
        }
      });
    },
  },
  mounted() {},
};
</script>

<style></style>
