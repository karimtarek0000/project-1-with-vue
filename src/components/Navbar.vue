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
              email:<span>free@psdfreebies.com</span>
            </p>
          </div>
          <!-- END NAVBAR PRIMARY INFO -->

          <!-- START NAVBAR PRIMARY NAV -->
          <div class="navbar_primary_nav">

              <!-- NAVBAR PRIMARY NAV LOGO -->
                <router-link class="navbar_primary_nav_logo" tag="a" to="/">
                  <svg class="">
                      <use xlink:href="../assets/img/sprit.svg#icon-MeStore"></use>
                  </svg>
                </router-link>

                <!--  -->
                <ul class="navbar_primary_nav_items list-unstyled">
                    <router-link tag="li" to="/" active-class="test">home</router-link>
                    <router-link tag="li" to="/shop" active-class="test">shop</router-link>
                    <router-link tag="li" to="/product" active-class="test">product</router-link>
                    <router-link tag="li" to="/blog" active-class="test">blog</router-link>
                    <router-link tag="li" to="/portfolio" active-class="test">portfolio</router-link>
                    <router-link tag="li" to="/page" active-class="test">page</router-link>
                </ul>

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
export default {

};
</script>

<style>
</style>