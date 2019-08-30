<template>
  <section class="container featured_products">
    <!-- FEATURED PRODUCTS HEADINGS -->
    <div class="featured_products_headings_box text-center">
      <div class="featured_products_headings featured_products_headings--1">
        <div class="featured_products_headings_icon">
          <svg>
            <use xlink:href="../assets/img/sprit.svg#icon-plane" />
          </svg>
        </div>
        <h2 class="featured_products_headings_heading">free shapping</h2>
        <p class="featured_products_headings_par">with €50 or more orders</p>
      </div>
      <div class="featured_products_headings featured_products_headings--2">
        <div class="featured_products_headings_icon">
          <svg>
            <use xlink:href="../assets/img/sprit.svg#icon-clock" />
          </svg>
        </div>
        <h2 class="featured_products_headings_heading">free refund</h2>
        <p class="featured_products_headings_par">100% refund within 3 days</p>
      </div>
      <div class="featured_products_headings featured_products_headings--3">
        <div class="featured_products_headings_icon">
          <svg>
            <use xlink:href="../assets/img/sprit.svg#icon-life-bouy" />
          </svg>
        </div>
        <h2 class="featured_products_headings_heading">support</h2>
        <p class="featured_products_headings_par">call us anytime you want</p>
      </div>
    </div>

    <!-- START QUICKLY SHAPPING -->
    <app-quicly-shapping></app-quicly-shapping>
    <!-- END QUICKLY SHAPPING -->
    
  </section>
</template>

<script>
// ALL IMPORT
import QuiclyShapping from './QuiclyShapping';
export default {
  components: {
    appQuiclyShapping: QuiclyShapping
  }
};
</script>

<style>
</style>