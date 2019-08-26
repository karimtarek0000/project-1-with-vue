<template>
  <!-- NAVBAR PRIMARY NAV SHAPPING -->
  <div class="navbar_primary_nav_shapping">
    <!-- NAVBAR PRIMARY NAV SHAPPING ICON -->
    <svg @click="show = !show" class="navbar_primary_nav_shapping_icon">
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
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    

  },
  mounted() {

    // SHAPPING CLOSE
    const shappingClose = () => {

        const closeIcon = document.querySelectorAll('.navbar_primary_nav_shapping_close');

        closeIcon.forEach( cur => cur.addEventListener('click', () => {
          if(cur.parentElement.parentElement.childElementCount == 1) {
            cur.parentElement.parentElement.remove();
          } else {
            cur.parentElement.remove();
          }
        }));


        
    }
    shappingClose();
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