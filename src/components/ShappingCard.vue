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

        <div id="shappingInner" class="navbar_primary_nav_shapping_boxs_inner">
          
          <div class="navbar_primary_nav_shapping_box" v-for="arr in arrayItems">
            <span class="navbar_primary_nav_shapping_close">&times;</span>
            <div class="navbar_primary_nav_shapping_image">
              <img :src="arr.imageSrc" :alt="arr.imageAlt" />
            </div>
            <div class="navbar_primary_nav_shapping_content">
              <p class="navbar_primary_nav_shapping_name_product">{{ arr.product }}</p>
              <p class="navbar_primary_nav_shapping_product_price">{{ arr.price }}</p>
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

        </div>

        <!-- NAVBAR PRIMARY NAV SHAPPING BOXS ACTIONS -->
        <div class="navbar_primary_nav_shapping_actions text-center text-capitalize">
          <p class="navbar_primary_nav_shapping_total_price">total price: {{ calcAllPrice }}</p>
          <a href="#" class="navbar_primary_nav_shapping_payment reset-link btn-primary">go to payment</a>
        </div>

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
    ...mapGetters([
      'calcAllPrice'
    ]),
    arrayItems() {
      return this.$store.state.ShappingCard.arrayProducts;
    }
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

      // ALL VARIABLES
      const shappingInner = document.getElementById('shappingInner'),
      shappingInnerChildren = document.getElementById('shappingInner').children,
      closeIcon = ".navbar_primary_nav_shapping_close";

      // FOR EACH CLICK CLOSE AND REMOVE ELEMENT
      shappingInner.addEventListener('click', e => {

        // TARGET PARENT ELEMNT 
        const targetCloseParent = e.target.closest(closeIcon).parentElement;

        // GET INDEX ELEMENT
        const index = Array.from(shappingInnerChildren).indexOf(targetCloseParent);

        // REMOVE INDEX FROM ARRAY
        this.arrayItems.splice(index, 1);

      })
      
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