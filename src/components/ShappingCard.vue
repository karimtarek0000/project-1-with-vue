<template>
  <!-- NAVBAR PRIMARY NAV SHAPPING -->
  <div class="navbar_primary_nav_shapping">
    <!-- NAVBAR PRIMARY NAV SHAPPING ICON -->
    <svg @click="closeShappingCard" class="navbar_primary_nav_shapping_icon">
      <title>shapping</title>
      <use xlink:href="../assets/img/sprit.svg#icon-shopping-cart" />
    </svg>

    <!-- NAVBAR PRIMARY NAV SHAPPING BOX -->
    <transition name="fade">
      <div v-show="show" class="navbar_primary_nav_shapping_boxs">
        <div class="navbar_primary_nav_shapping_box">
          <span class="navbar_primary_nav_shapping_close">&times;</span>
          <div class="navbar_primary_nav_shapping_image">
            <img src="http://www.placehold.it/100/100" />
          </div>
          <div class="navbar_primary_nav_shapping_content">
            <p class="navbar_primary_nav_shapping_name_product">{{ getProduct }}</p>
            <p class="navbar_primary_nav_shapping_product_price">{{ getPrice }}</p>
            <ul id="rating" class="navbar_primary_nav_shapping_rating list-unstyled">
              <li class="navbar_primary_nav_shapping_rating_icons">
                <svg>
                  <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
                </svg>
              </li>
              <li class="navbar_primary_nav_shapping_rating_icons">
                <svg>
                  <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
                </svg>
              </li>
              <li class="navbar_primary_nav_shapping_rating_icons">
                <svg>
                  <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
                </svg>
              </li>
              <li class="navbar_primary_nav_shapping_rating_icons">
                <svg>
                  <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
                </svg>
              </li>
              <li class="navbar_primary_nav_shapping_rating_icons">
                <svg>
                  <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
                </svg>
              </li>
            </ul>
          </div>
        </div>

        <!-- <div class="navbar_primary_nav_shapping_box">
          <span class="navbar_primary_nav_shapping_close">&times;</span>
          <div class="navbar_primary_nav_shapping_image">
            <img src="http://www.placehold.it/100/100" />
          </div>
          <div class="navbar_primary_nav_shapping_content">
            <p class="navbar_primary_nav_shapping_name_product">macbook pro 2017</p>
            <p class="navbar_primary_nav_shapping_product_price">$999</p>
            <ul class="navbar_primary_nav_shapping_rating list-unstyled">
              <li class="navbar_primary_nav_shapping_rating_icons">
                <svg>
                  <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
                </svg>
              </li>
              <li class="navbar_primary_nav_shapping_rating_icons">
                <svg>
                  <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
                </svg>
              </li>
              <li class="navbar_primary_nav_shapping_rating_icons">
                <svg>
                  <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
                </svg>
              </li>
              <li class="navbar_primary_nav_shapping_rating_icons">
                <svg>
                  <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
                </svg>
              </li>
              <li class="navbar_primary_nav_shapping_rating_icons">
                <svg>
                  <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        -->
      </div>
    </transition>
  </div>
</template>

<script>
// ALL IMPORT
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters(["getProduct", "getPrice"])
  },
  methods: {

    // CLOSE SHAPPING CARD
    closeShappingCard() {
      const primaryNav = document.getElementById("primaryNav");

      // TOGGLE TRUE AND FALSE
      this.show = !this.show;

      // IF STATEMENT OVERFLOW HIDDEN AND VISIBLE
      this.show ? primaryNav.style.overflow = "visible" : primaryNav.style.overflow = "hidden";
      
    },

    // SHAPPING CLOSE
    shappingClose() {

      const primaryNav = document.getElementById("primaryNav"),
      closeIcon = document.querySelectorAll(".navbar_primary_nav_shapping_close");

      // FOR EACH CLICK CLOSE AND REMOVE ELEMENT
      closeIcon.forEach(cur =>
        cur.addEventListener("click", () => {
          if (cur.parentElement.parentElement.childElementCount == 1) {
            cur.parentElement.parentElement.remove();
            primaryNav.style.overflow = "hidden";
          } else {
            cur.parentElement.remove();
          }
        })
      );
    }

  },
  mounted() {

    // RUNNING SHAPPING CLOSE
    this.shappingClose();
  }
};
</script>

<style scoped>
/* TRANSITION */
.fade-enter,
.fade-leave,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
</style>