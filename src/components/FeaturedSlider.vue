<template>
  <div class="featured_products_slider text-capitalize">
    <div class="featured_products_slider_heading text-center text-capitalize">
      <h3 class="featured_products_slider_heading_head">featured products</h3>
      <p
        class="featured_products_slider_heading_par"
      >praesent mauris. fusce nec tellus sed augue semper porta.</p>
    </div>

    <!-- START FEATURED PRODUCTS SLIDER INNER -->
    <div
      id="sliderInner"
      class="featured_products_slider_inner"
      @mousedown="mouseDown($event, $event.pageX)"
      @mouseup="mouseUp"
      @mouseleave="mouseLeave"
      @mousemove="mouseMove($event, $event.pageX)"
    >
      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/1.png" alt="image-one" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$500</span>
          <span class="featured_products_slider_slide_discount">$600</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>

      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/2.png" alt="image-two" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$900</span>
          <span class="featured_products_slider_slide_discount">$1000</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>

      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/1.png" alt="image-one" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$400</span>
          <span class="featured_products_slider_slide_discount">$500</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>

      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/3.png" alt="image-three" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$700</span>
          <span class="featured_products_slider_slide_discount">$800</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>

      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/1.png" alt="image-one" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$120</span>
          <span class="featured_products_slider_slide_discount">$150</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>

      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/4.png" alt="image-four" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$650</span>
          <span class="featured_products_slider_slide_discount">$700</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>

      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/1.png" alt="image-one" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$300</span>
          <span class="featured_products_slider_slide_discount">$350</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>

      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/1.png" alt="image-one" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$450</span>
          <span class="featured_products_slider_slide_discount">$500</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>

      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/1.png" alt="image-one" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$300</span>
          <span class="featured_products_slider_slide_discount">$400</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>

      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/1.png" alt="image-one" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$60</span>
          <span class="featured_products_slider_slide_discount">$70</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>

      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/1.png" alt="image-one" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$550</span>
          <span class="featured_products_slider_slide_discount">$600</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>

      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/4.png" alt="image-four" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$700</span>
          <span class="featured_products_slider_slide_discount">$900</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>

      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/1.png" alt="image-one" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$500</span>
          <span class="featured_products_slider_slide_discount">$600</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>

      <div class="featured_products_slider_slide">
        <div class="featured_products_slider_slide_image">
          <img src="../assets/img/slider/4.png" alt="image-four" />
        </div>

        <div class="featured_products_slider_slide_caption">
          <h4 class="featured_products_slider_slide_head">orange t-shirt</h4>
          <ul class="featured_products_slider_slide_rating list-unstyled">
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
            <li>
              <svg>
                <use xlink:href="../assets/img/sprit.svg#icon-star-o" />
              </svg>
            </li>
          </ul>
          <span class="featured_products_slider_slide_price">$500</span>
          <span class="featured_products_slider_slide_discount">$600</span>
          <a href="#" class="featured_products_slider_slide_btn btn-primary reset-link">add card</a>
        </div>
      </div>
    </div>
    <!-- END FEATURED PRODUCTS SLIDER INNER -->

    <!-- START FEATURED PRODUCTS SLIDER CONTROL -->
    <div class="featured_products_slider_control text-center">
      <svg
        class="featured_products_slider_control_icon featured_products_slider_control_icon--left"
        @click="clickManger(--countSlide)"
        id="arrowLeft"
      >
        <use xlink:href="../assets/img/sprit.svg#icon-arrow-circle-left" />
      </svg>

      <svg
        class="featured_products_slider_control_icon featured_products_slider_control_icon--right"
        @click="clickManger(++countSlide)"
        id="arrowRight"
      >
        <use xlink:href="../assets/img/sprit.svg#icon-arrow-circle-right" />
      </svg>
      <div></div>
    </div>
    <!-- END FEATURED PRODUCTS SLIDER CONTROL -->
  </div>
</template>

<script>
import { center } from '../main';

export default {
  data() {
    return {
      classActive: "featured_products_slider_inner--active",
      startDownX: "",
      startMoveX: "",
      scrollLeftDown: "",
      minDM: "",
      showScreen: "",
      countSlide: 0,
      counter: "",
      child: "",
      slider: "",
      minSclientWidthScrollWidth: "",
      status: false
    };
  },
  computed: {

    // WHAT WIDTH SCREEN
    whatWidthScreen() {
      if(window.innerWidth <= 600) {

        this.showScreen = 1 

      } else if (window.innerWidth > 600 && window.innerWidth <= 900) {

        this.showScreen = 2

      } else {

        this.showScreen = 4

      }
    },

    // ARROW OPACITY CLICK
    arrowOpacityClick() {
      // ALL VARIABLES
      const slider = document.getElementById("sliderInner"),
        arrowRight = document.getElementById("arrowRight"),
        arrowLeft = document.getElementById("arrowLeft");

      // IF STATEMENT
      if (this.countSlide == 0) {
        arrowLeft.style.opacity = 0.5;
        arrowRight.style.opacity = 1;
      } else if (this.countSlide == this.child) {
        arrowLeft.style.opacity = 1;
        arrowRight.style.opacity = 0.5;
      } else {
        arrowLeft.style.opacity = 1;
        arrowRight.style.opacity = 1;
      }
    },

    // ARROW OPACITY TOUCH
    arrowOpacityTouch() {
      // ALL VARIABLES
      const slider = document.getElementById("sliderInner"),
        arrowRight = document.getElementById("arrowRight"),
        arrowLeft = document.getElementById("arrowLeft");

      // IF STATEMENT
      if (this.slider == this.minSclientWidthScrollWidth) {
        arrowRight.style.opacity = 0.5;
      } else if (this.slider == 0) {
        arrowLeft.style.opacity = 0.5;
      } else {
        arrowRight.style.opacity = 1;
        arrowLeft.style.opacity = 1;
      }

      slider.style.scrollBehavior = "none";
    },

    // GET ARRAY
    getArray() {
      return this.$store.state.ShappingCard.arrayProducts;
    }

  },
  methods: {
    // MOUSE DOWN
    mouseDown(e, option) {
      // STATUS = TRUE WILL BE RUNNING
      this.status = true;

      // SLIDER
      const slider = document.getElementById("sliderInner");

      // ADD CLASS ACTIVE
      slider.classList.add(this.classActive);

      // PAGE X WITH MOUSE DOWN
      this.startDownX = option - slider.offsetLeft;

      // SCROLL LEFT SLIDER WILL BE MOUSE DOWN
      this.scrollLeftDown = slider.scrollLeft;
    },

    // MOUSE UP
    mouseUp() {
      // STATUS = FALSE
      this.status = false;

      // SLIDER
      const slider = document.getElementById("sliderInner");

      // REMOVE CLASS ACTIVE
      slider.classList.remove(this.classActive);
    },

    // MOUSE LEAVE
    mouseLeave() {
      // STATUS = FALSE
      this.status = false;

      // SLIDER
      const slider = document.getElementById("sliderInner");

      // REMOVE CLASS ACTIVE
      slider.classList.remove(this.classActive);
    },

    // MOUSE MOVE
    mouseMove(e, option) {
      // NOT RUNNING FUNCTION
      if (!this.status) return;

      // SLIDER
      const slider = document.getElementById("sliderInner");

      // MOVE X
      this.startMoveX = option - slider.offsetLeft;

      // MOVE X MINUS DOWN X
      window.innerWidth > 900
        ? (this.minDM = (this.startMoveX - this.startDownX) * 4)
        : (this.minDM = (this.startMoveX - this.startDownX) * 2);

      // SLIDER SCROLL LEFT EQUAL SCROLL LEFT DOWN MINUS MINUS DOWN AND MOVE
      slider.scrollLeft = this.scrollLeftDown - this.minDM;

      // MINUS SCROLL WIDTH AND CLIENT WIDTH
      this.minSclientWidthScrollWidth = slider.scrollWidth - slider.offsetWidth;

      // POST SLIDER SCROLL LEFT DATA
      this.slider = slider.scrollLeft;

      // RUNNING COMPUTED
      this.arrowOpacityTouch;

      // SCROLL BEHAVIOR CONVERT AUTO
      slider.style.scrollBehavior = 'auto';
    },

    // TOUCH DEVICE
    touchDevice() {
      const slider = document.getElementById("sliderInner");

      slider.addEventListener("touchstart", e => {
        // STATUS = TRUE WILL BE RUNNING
        this.status = true;

        // SLIDER
        const slider = document.getElementById("sliderInner");

        // ADD CLASS ACTIVE
        slider.classList.add(this.classActive);

        // PAGE X WITH MOUSE DOWN
        this.startDownX = e.touches[0].pageX - slider.offsetLeft;

        // SCROLL LEFT SLIDER WILL BE MOUSE DOWN
        this.scrollLeftDown = slider.scrollLeft;
      });

      slider.addEventListener("touchmove", e => {
        // NOT RUNNING FUNCTION
        if (!this.status) return;

        // SLIDER
        const slider = document.getElementById("sliderInner");

        // MOVE X
        this.startMoveX = e.touches[0].pageX - slider.offsetLeft;

        // MOVE X MINUS DOWN X
        window.innerWidth > 900
          ? (this.minDM = (this.startMoveX - this.startDownX) * 4)
          : (this.minDM = (this.startMoveX - this.startDownX) * 2);

        // SLIDER SCROLL LEFT EQUAL SCROLL LEFT DOWN MINUS MINUS DOWN AND MOVE
        slider.scrollLeft = this.scrollLeftDown - this.minDM;

        // MINUS SCROLL WIDTH AND CLIENT WIDTH
        this.minSclientWidthScrollWidth =
          slider.scrollWidth - slider.clientWidth;

        // POST SLIDER SCROLL LEFT DATA
        this.slider = slider.scrollLeft;

        // RUNNING COMPUTED
        this.arrowOpacityTouch;

        // SLIDER SCROLL BEHAVIOR CONVERT AUTO
        slider.style.scrollBehavior = 'auto';
      });

    },

    // CLICK MANGER
    clickManger(count) {
      // ALL VARIABLE
      const slider = document.getElementById("sliderInner"),
        slide = slider.children[0],
        childCount = slider.childElementCount,
        child = Math.floor(slider.childElementCount / this.showScreen),
        getStyle = window.getComputedStyle(slide),
        getWidth = parseInt(getStyle.width),
        getMargin = parseInt(getStyle.marginRight),
        sumWidthMargin = (getWidth + getMargin + 3.75) * this.showScreen;

      // POST IN VUE DATA
      this.child = child;

      // IF STATEMENT
      if (count <= child && count >= 0) {
        this.counter = sumWidthMargin * count;
        slider.scrollLeft = this.counter;
      } else if (count >= child) {
        slider.scrollLeft = 0;
        this.countSlide = 0;
      } else if (count < 0) {
        slider.scrollLeft = slider.scrollWidth;
        this.countSlide = child;
      }

      // RUNNING COMPUTED ARROW OPACITY
      this.arrowOpacityClick;

      // SCROLL BEHAVIOR CONVERT SMOOTH
      slider.style.scrollBehavior = 'smooth';

    },

    // POST DATA
    postData() {

      //
      class products {
        constructor(product, price, imageSrc, imageAlt) {
          this.product = product;
          this.price = price;
          this.imageSrc = imageSrc;
          this.imageAlt = imageAlt;
        }
      }


      const btn = document.querySelectorAll('.featured_products_slider_slide_btn');

      let product = '',
          price = '',
          imageSrc = '',
          imageAlt = ''

      btn.forEach( cur => {
        cur.addEventListener('click', (e) => {

          // PREVENT DEFAULT
          e.preventDefault();

          const parent = e.target.parentElement.parentElement.children;

          for(const curOne in parent) {

            if(center.hasClass(parent[curOne], 'featured_products_slider_slide_image')) {

                imageSrc = parent[curOne].children[0].src;
                imageAlt = parent[curOne].children[0].alt;

            } else if ( center.hasClass(parent[curOne], 'featured_products_slider_slide_caption') ) {
              const parentCaption = parent[curOne].children;

              for(const curTwo in parentCaption) {

                  if( center.hasClass(parentCaption[curTwo], 'featured_products_slider_slide_head') ) {
                      product = parentCaption[curTwo].textContent;
                  } else if ( center.hasClass(parentCaption[curTwo], 'featured_products_slider_slide_price') ) {
                      price = parentCaption[curTwo].textContent;
                  }
              }

            }

          }

          const pushItems = new products(product, price, imageSrc, imageAlt);

          this.getArray.push( pushItems );
         
        });
      });

    }
  },
  mounted() {
    // RUNNING COMPUTED WIDTH SCREEN
    this.whatWidthScreen;

    // RUNNING COMPUTED ARROW OPACITY
    this.arrowOpacityClick;

    // RUNNING TOUCH DEVICE
    this.touchDevice();

    // RUNNING POST DATA
    this.postData();
  }
};
</script>

<style>
</style>