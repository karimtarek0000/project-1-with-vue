<template>
  <nav class="navbar">
    <!-- START NAVBAR NOTE -->
    <div class="navbar_note">
      <!-- START CONTAINER -->
      <div class="container">
        <!-- START NAVBAR NOTE CONTENT -->
        <div class="navbar_note_content">
          <!-- NAVBAR NOTE PARAGRAPH -->
          <p
            class="navbar_note_paragraph text-capitalize"
          >free international shipping with $75 purchase</p>

          <!-- ICON CLOSE -->
          <div class="navbar_note_close">
            <span class="navbar_note_close_icon">&times;</span>
          </div>
        </div>
        <!-- END NAVBAR NOTE CONTENT -->
      </div>
      <!-- END CONTAINER -->
    </div>
    <!-- END NAVBAR NOTE -->

    <!-- START NAVBAR NAV -->
    <div class="navbar_primary">
      <!-- START CONTAINER -->
      <div class="container">
        <!-- START NAVBAR PRIMARY BOX -->
        <div class="navbar_primary_box">
          <!-- START NAVBAR PRIMARY INFO -->
          <div class="navbar_primary_info">
            <!-- NAVBAR PRIMARY INFO TITLE -->
            <p class="navbar_primary_info_title text-capitalize">hello guys! welcome to me shop</p>

            <!-- NAVBAR PRIMARY INFO EMAIL -->
            <p class="navbar_primary_info_email text-capitalize">
              email:
              <span>free@psdfreebies.com</span>
            </p>
          </div>
          <!-- END NAVBAR PRIMARY INFO -->

          <!-- START NAVBAR PRIMARY NAV -->
          <div class="navbar_primary_nav">
            <!-- NAVBAR PRIMARY NAV LOGO -->
            <router-link class="navbar_primary_nav_logo" tag="a" to="/">
              <svg class>
                <use xlink:href="../assets/img/sprit.svg#icon-MeStore" />
                <title>me store</title>
              </svg>
            </router-link>

            <!-- NAVBAR PRIMARY NAV ITEMS -->
            <ul id="navbar-primary" class="navbar_primary_nav_items list-unstyled">
              <router-link
                v-for="item in navbarItems"
                tag="li"
                :to="item"
                exact
                active-class="navbar_primary_nav_items--itemactive"
              >{{ item == '/'? item = 'home': item }}</router-link>
            </ul>

            <!-- NAVBAR PRIMARY NAV SEARCH -->
            <form class="navbar_primary_nav_search">
              <!-- INPUT SEARCH -->
              <input id="home-search" class="reset-input" type="search" />

              <!-- BUTTON SUBMIT -->
              <button
                @mouseout="statusHover = false"
                @mouseover="animationSearchHome"
                class="reset-button"
                id="home-button-search"
                type="submit"
              >
                <svg>
                  <use xlink:href="../assets/img/sprit.svg#icon-search1" />
                  <title>search</title>
                </svg>
              </button>
            </form>

            <!-- NAVBAR PRIMARY NAV SHAPPING -->
            <app-shapping-card></app-shapping-card>
            
          </div>
          <!-- END NAVBAR PRIMARY NAV -->
        </div>
        <!-- END NAVBAR PRIMARY BOX -->
      </div>
      <!-- END CONTAINER -->
    </div>
    <!-- END NAVBAR NAV -->
  </nav>
</template>

<script>

import ShappingCard from './ShappingCard';

export default {
  data() {
    return {
      navbarItems: ["/", "shop", "product", "blog", "portfolio", "page"],
      statusHover: true
    };
  },
  methods: {
    animationSearchHome() {
      if (this.statusHover) {
        // ALL VARIABLES
        const searchIcon = document.getElementById("home-button-search");
        const searchInput = document.getElementById("home-search");
        const navbarItems = document.getElementById("navbar-primary").children;

        let tl = new TimelineMax();

        // TIME LINE ANIMATION
        tl.staggerTo(
          navbarItems,
          0.5,
          { y: 10, autoAlpha: 0, ease: Power1.easeInOut },
          0.1
        ).fromTo(
          searchInput,
          0.5,
          { width: "0%", autoAlpha: 0 },
          { width: "50%", autoAlpha: 1, ease: Power1.easeInOut }
        );

        // FUNCTION OPTION ALL ADD EVENT LISTENER
        const option = () => {
          tl.reverse();
          searchInput.value = "";
          this.statusHover = true;
        };

        // IF USER CLICK WINDOW
        window.addEventListener("click", option);

        // IF USER CLICK IN INPUT FIELD NOT CLOSE INPUT
        searchInput.addEventListener("click", e => e.stopPropagation());

        // IF USER BLUR INPUT
        searchInput.addEventListener("blur", option);
      }
    }
  },
  components: {
    appShappingCard: ShappingCard
  }
};
</script>

<style>

</style>