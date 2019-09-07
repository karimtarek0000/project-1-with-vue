<template>
  <div>
    <!-- HEADER -->
    <app-header></app-header>

    <!-- FIRST SECTION -->
    <app-featured-products></app-featured-products>

    <!-- LATEST NEWS -->
    <app-latest-news></app-latest-news>

    <!-- OUR BRANDS -->
    <app-our-brands></app-our-brands>

    <!-- TRUST BRANDS -->
    <app-trust-brands></app-trust-brands>
    
  </div>
</template>

<script>
// ALL IMPORT
import Header from "../components/Header.vue";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestNews from "../components/LatestNews";
import OurBrands from "../components/OurBrands";
import TrustBrands from "../components/TrustBrands";

export default {
  components: {
    appHeader: Header,
    appFeaturedProducts: FeaturedProducts,
    appLatestNews: LatestNews,
    appOurBrands: OurBrands,
    appTrustBrands: TrustBrands
  }
};
</script>

<style>
</style>