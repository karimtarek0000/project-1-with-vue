<template>
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
        <div class="navbar_note_close" @click="removeNav">
          <span class="navbar_note_close_icon">&times;</span>
        </div>
      </div>
      <!-- END NAVBAR NOTE CONTENT -->
    </div>
    <!-- END NAVBAR NOTE BOX -->
  </div>
</template>

<script>
export default {
  methods: {
    removeNav(e) {
      e.target.parentElement.parentElement.parentElement.parentElement.remove();
    }
  }
};
</script>

<style>
</style>