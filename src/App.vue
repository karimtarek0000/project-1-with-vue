<template>
  <div>

    <!-- APP NAVBAR -->
    <app-navbar v-if="!hideNavbar"></app-navbar>

    <main>

      <!-- VIEW ROUTER -->
      <router-view></router-view>
      
    </main>

    <!-- FOOTER -->
    <app-footer></app-footer>

    <!-- LOAD ANIMATION -->
    <app-load-animation></app-load-animation>

  </div>
</template>

<script>
// ALL IMPORT
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadAnimation from "./components/LoadAnimation";

export default {
  computed: {
    
    // HIDE NAVBAR
    hideNavbar() {
      return this.$route.path === "/error";
    }
  },
  components: {
    appNavbar: Navbar,
    appFooter: Footer,
    appLoadAnimation: LoadAnimation
  }
};
</script>

<style>
</style>