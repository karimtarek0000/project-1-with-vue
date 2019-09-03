<template>
  <div>
    <!-- HEADER -->
    <app-header></app-header>

    <!-- FIRST SECTION -->
    <app-featured-products></app-featured-products>

    <!-- LATEST NEWS -->
    <app-latest-news></app-latest-news>
    
  </div>
</template>

<script>
// ALL IMPORT
import Header from "../components/Header.vue";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestNews from "../components/LatestNews";

export default {
  components: {
    appHeader: Header,
    appFeaturedProducts: FeaturedProducts,
    appLatestNews: LatestNews
  }
};
</script>

<style>
</style>