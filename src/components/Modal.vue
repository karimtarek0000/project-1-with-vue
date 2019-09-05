<template>
  <transition name="modal">
    <!-- START MORE -->
    <div class="more">
      <span class="more_icon" @click="closeModal">&times;</span>

      <!-- START MORE BOX -->
      <div class="more_box">

        <!-- MORE CONTENT -->
        <div class="more_content">
          <h2 class="more_head" v-text="head"></h2>
          <p class="more_title" v-text="title"></p>
          <p class="more_par" v-text="par"></p>
          <p class="more_more_par" v-text="morePar"></p>
        </div>

        <!-- MORE IMAGE -->
        <div id="more_image" class="more_image">
          <img :src="src" :alt="alt" />
        </div>

      </div>
      <!-- END MORE BOX -->

    </div>
    <!-- END MORE -->
  </transition>
</template>

<script>
export default {
  // PROPS
  props: ["src", "alt", "head", "title", "par", "morePar"],

  // METHODS
  methods: {
    //CLOSE MODAL
    closeModal() {
      return this.$emit("close");
    },

    // CLOSE KEY ESC
    closeKey() {
      window.addEventListener("keydown", e => {
        if (e.keyCode == 27) return this.$emit("close");
      });
    }
  },
  mounted() {
    // TRIGGER CLOSE KEY
    this.closeKey();
  }
};
</script>

<style>
</style>