import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import DataRealtimeView from "@/views/DataRealtimeView.vue";
import AnalitikView from "@/views/AnalitikView.vue";
import LaporanView from "@/views/LaporanView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardView,
  },
  {
    path: "/data-realtime",
    name: "DataRealtime",
    component: DataRealtimeView,
  },
  {
    path: "/analitik",
    name: "Analitik",
    component: AnalitikView,
  },
  {
    path: "/laporan",
    name: "Laporan",
    component: LaporanView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
