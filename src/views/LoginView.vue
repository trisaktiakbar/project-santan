<template>
  <div id="wrapper">
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid bg-size-cover" style="height: 100vh; background-image: url('/img/wave.png')">
          <div class="row align-items-center" style="height: 100vh">
            <div class="d-none d-lg-block offset-lg-1 col-lg-5">
              <img class="w-100" src="/img/bg.svg" alt="" />
            </div>
            <div class="col-8 offset-2 col-lg-3 offset-lg-1">
              <div class="text-center">
                <img src="/img/avatar.svg" class="mb-3" width="100px" />
                <h1 class="h2 mb-4">Log Into<br />Your Account</h1>
              </div>
              <form @submit.prevent="login" class="user mb-3">
                <div class="text-center">
                  <div class="form-group">
                    <input type="email" v-model="email" class="form-control form-control-user" id="email" placeholder="Enter Email Address..." required />
                  </div>
                  <div class="form-group">
                    <input type="password" v-model="password" class="form-control form-control-user" id="password" placeholder="Password" required />
                  </div>
                </div>
                <div class="form-group mb-4">
                  <div class="custom-control custom-checkbox small">
                    <input type="checkbox" class="custom-control-input" id="customCheck" />
                    <label class="custom-control-label" for="customCheck">Remember Me</label>
                  </div>
                </div>
                <button id="btn-login" type="submit" class="btn btn-primary btn-user btn-block">Login</button>
              </form>
              <FooterComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { auth } from "../firebase/config";
import FooterComponent from "./../components/FooterComponent.vue";
import router from "@/router/router";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          router.push({ name: "Dashboard" });
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            this.error = "Email atau kata sandi yang Anda masukkan salah...";
          } else if (error.code === "auth/user-not-found") {
            this.error = "Akun tidak terdaftar";
          } else {
            this.error = "Periksa kembali koneksi Anda...";
          }
          Swal.fire({
            title: "Login Gagal!",
            text: this.error,
            icon: "warning",
            confirmButtonText: "Tutup",
          });
        });
    },
    hideModal() {
      this.error = false;
    },
  },
  components: {
    FooterComponent,
  },
  mounted() {
    const router = useRouter();
    auth.onAuthStateChanged((user) => {
      if (user) {
        router.push({ name: "Dashboard" });
      }
    });
  },
};
</script>

<style></style>
