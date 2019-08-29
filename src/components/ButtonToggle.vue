<template>
  <div class="navbar_primary_nav_toggle" ref="toggleNavbar" @click="runningAnimation">
    <span class="navbar_primary_nav_toggle_icon navbar_primary_nav_toggle_icon--1"></span>
    <span class="navbar_primary_nav_toggle_icon navbar_primary_nav_toggle_icon--2"></span>
    <span class="navbar_primary_nav_toggle_icon navbar_primary_nav_toggle_icon--3"></span>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tl: new TimelineMax()
        }
    },
  methods: {
    // RUNNING ANIMATION
    runningAnimation() {

        // PARENT BTN TOGGLE
        const parentBtnToggle = this.$refs.toggleNavbar;

      // TIME LINE TRACK
      if(!parentBtnToggle.classList.contains('active')) {
        
        // ADD CLASS ACTIVE
        parentBtnToggle.classList.add('active');
        this.trackAnimation(false);

      } else {

        // REMOVE CLASS ACTIVE
        parentBtnToggle.classList.remove('active');
        const timeLineReverse = this.tl.reversed();

        // PATH TRUE TL.REVERSED
        this.trackAnimation(true);

        // TOGGLE PLAY BACK
        this.tl.reversed(`!${timeLineReverse}`);
      }

        
    },
    
    // TRACK ANIMATION
    trackAnimation(status) {
        // ALL VARIABLES
        const parentBtnToggle = this.$refs.toggleNavbar,
        childsBtnToggleOne = this.$refs.toggleNavbar.children[0],
        childsBtnToggleTwo = this.$refs.toggleNavbar.children[1],
        childsBtnToggleThree = this.$refs.toggleNavbar.children[2],
        navbarItems = document.getElementById("navbar-primary"),
        duration = ".5";

        // TIME LINE TRACK
        this.tl
            .to(childsBtnToggleOne, duration, {position: "relative",transform: "translateY(9px) rotate(45deg)",ease: Power2.ease})
            .to(childsBtnToggleTwo,0.1,{ autoAlpha: 0, ease: Power2.ease },"=-.5")
            .to(childsBtnToggleThree,duration,{position: "relative",transform: "translateY(-6px) rotate(-45deg)",ease: Power2.ease},"=-.5")
            .to(navbarItems, duration, {autoAlpha: 1,right: "0",ease: Power1.easeInOut});
        
        // TL REVERSED
        this.tl.reversed(status);
    }
  },
};
</script>

<style>
</style>