<template>
  <div class="navbar_primary_nav_toggle" ref="toggleNavbar">
    <span class="navbar_primary_nav_toggle_icon navbar_primary_nav_toggle_icon--1"></span>
    <span class="navbar_primary_nav_toggle_icon navbar_primary_nav_toggle_icon--2"></span>
    <span class="navbar_primary_nav_toggle_icon navbar_primary_nav_toggle_icon--3"></span>
  </div>
</template>

<script>
export default {
  mounted() {
    const btnToggle = () => {
      const parentBtnToggle = this.$refs.toggleNavbar,
        childsBtnToggleOne = this.$refs.toggleNavbar.children[0],
        childsBtnToggleTwo = this.$refs.toggleNavbar.children[1],
        childsBtnToggleThree = this.$refs.toggleNavbar.children[2],
        navbarItems = document.getElementById("navbar-primary"),
        duration = ".5";

      const tl = new TimelineMax();

      // TIME LINE TRACK
      tl.to(childsBtnToggleOne, duration, {
        position: "relative",
        transform: "translateY(9px) rotate(45deg)",
        ease: Power2.ease
      })
        .to(
          childsBtnToggleTwo,
          0.1,
          { autoAlpha: 0, ease: Power2.ease },
          "=-.5"
        )
        .to(
          childsBtnToggleThree,
          duration,
          {
            position: "relative",
            transform: "translateY(-6px) rotate(-45deg)",
            ease: Power2.ease
          },
          "=-.5"
        )
        .to(navbarItems, duration, {
          autoAlpha: 1,
          right: "0",
          ease: Power1.easeInOut
        });

      // TIME LINE PAUSE
      tl.pause();

      // ADD EVENT LISTENER
      parentBtnToggle.addEventListener("click", () => {
        if (!parentBtnToggle.classList.contains("active")) {
          // ADD CLASS ACTIVE
          parentBtnToggle.classList.add("active");

          // STATUS TIME LINE ANIMATION
          tl.play();
          tl.reversed(true);
        } else {
          // REMOVE CLASS ACTIVE
          parentBtnToggle.classList.remove("active");

          // IF TL REVERSED WILL BE PLAY BACK
          tl.reversed(!tl.reversed());
        }
      });
    };

    // RUNNING FUNCTION
    btnToggle();
  }
};
</script>

<style>
</style>