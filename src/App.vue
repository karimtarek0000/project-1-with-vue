<template>
  <div>
    <!-- APP NAVBAR -->
    <app-navbar v-if="!hideNavbar"></app-navbar>

    <!-- VIEW ROUTER -->
    <router-view></router-view>

    <!-- FOOTER -->
    <app-footer></app-footer>
  </div>
</template>

<script>
// ALL IMPORT
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  computed: {
    
    // HIDE NAVBAR
    hideNavbar() {
      return this.$route.path === "/error";
    }
  },
  components: {
    appNavbar: Navbar,
    appFooter: Footer
  }
};
</script>

<style>
</style>