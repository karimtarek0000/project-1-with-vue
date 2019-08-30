<template>
  <div>
    <!-- HEADER -->
    <app-header></app-header>

    <!-- FIRST SECTION -->
    <app-featured-products></app-featured-products>
  </div>
</template>

<script>
// ALL IMPORT
import Header from "../components/Header.vue";
import FeaturedProducts from "../components/FeaturedProducts";

export default {
  components: {
    appHeader: Header,
    appFeaturedProducts: FeaturedProducts
  }
};
</script>

<style>
</style>