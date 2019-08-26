<template>
  <div>
    <!-- APP NAVBAR -->
    <app-navbar></app-navbar>

    <!-- VIEW ROUTER -->
    <router-view></router-view>

  </div>
</template>

<script>
// ALL IMPORT
import Navbar from './components/Navbar';

export default {
  components: {
    appNavbar: Navbar
  }
};
</script>

<style>
</style>