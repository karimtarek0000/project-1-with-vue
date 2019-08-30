<template>
  <div>
    <!-- APP NAVBAR -->
    <app-navbar v-if="!hideNavbar()"></app-navbar>

    <!-- VIEW ROUTER -->
    <router-view></router-view>
  </div>
</template>

<script>
// ALL IMPORT
import Navbar from "./components/Navbar";

export default {
  methods: {
    hideNavbar() {
      return this.$route.path === "/error";
    }
  },
  components: {
    appNavbar: Navbar
  }
};
</script>

<style>
</style>