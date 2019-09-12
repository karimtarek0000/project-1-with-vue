<template>
  <nav id="navbar" class="navbar">
    <!-- START NAVBAR NOTE -->
    <app-note-bar></app-note-bar>
    <!-- END NAVBAR NOTE -->

    <!-- START NAVBAR NAV -->
    <div class="navbar_primary">
      <!-- START CONTAINER -->
      <div class="container">
        <!-- START NAVBAR PRIMARY BOX -->
        <div class="navbar_primary_box">
          <!-- START NAVBAR PRIMARY INFO -->
          <div class="navbar_primary_info">
            <!-- NAVBAR PRIMARY INFO CONTENT -->
            <div class="navbar_primary_info_content">
              <!-- NAVBAR PRIMARY INFO TITLE -->
              <p
                class="navbar_primary_info_content_title text-capitalize"
              >hello guys! welcome to me shop</p>

              <!-- NAVBAR PRIMARY INFO EMAIL -->
              <p class="navbar_primary_info_content_email text-capitalize">
                email:
                <span class="text-lowercase">free@psdfreebies.com</span>
              </p>
            </div>

            <!-- NAVBAR PRIMARY INFO OPTIONS -->
            <div class="navbar_primary_info_options text-uppercase">
              <!-- NAVBAR PRIMARY INFO OPTIONS LANG -->
              <div
                id="optionsLang"
                class="navbar_primary_info_options_lang navbar_primary_info_options--box"
              >
                <!-- NAVBAR PRIMARY INFO OPTIONS ICON -->
                <div
                  id="lang"
                  class="navbar_primary_info_options_icon"
                  @click="animationOptionsList"
                >
                  <span class="navbar_primary_info_options_title">{{ lang }}</span>
                  <i class="fas fa-angle-down"></i>
                </div>

                <!-- NAVBAR PRIMARY INFO OPTIONS SELECT -->
                <ul
                  id="dataSelectLang"
                  @click="getDataSelect"
                  class="navbar_primary_info_options_select list-unstyled"
                >
                  <li
                    class="navbar_primary_info_options_select_item"
                    v-for="lang in arrayLang"
                  >{{ lang }}</li>
                </ul>
              </div>

              <!-- NAVBAR PRIMARY INFO OPTIONS CUR -->
              <div
                id="optionsCur"
                class="navbar_primary_info_options_cur navbar_primary_info_options--box"
              >
                <!-- NAVBAR PRIMARY INFO OPTIONS ICON -->
                <div
                  id="cur"
                  class="navbar_primary_info_options_icon"
                  @click="animationOptionsList"
                >
                  <span class="navbar_primary_info_options_title">{{ cur }}</span>
                  <i class="fas fa-angle-down"></i>
                </div>

                <!-- NAVBAR PRIMARY INFO OPTIONS SELECT -->
                <ul
                  id="dataSelectCur"
                  @click="getDataSelect"
                  class="navbar_primary_info_options_select list-unstyled"
                >
                  <li
                    class="navbar_primary_info_options_select_item"
                    v-for="cur in arrayCur"
                  >{{ cur }}</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- END NAVBAR PRIMARY INFO -->

          <!-- START NAVBAR PRIMARY NAV -->
          <div class="navbar_primary_nav" id="primaryNav">
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
                @click="paddingBody"
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
              <input
                id="home-search"
                ref="inputsearch"
                @focus="validationInputResponsive"
                class="reset-input"
                type="search"
                autocomplete="off"
              />

              <!-- BUTTON SUBMIT -->
              <button
                @click="animationSearchHome"
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

            <!-- START NAVBAR PRIMARY NAV SHAPPING -->
            <app-shapping-card></app-shapping-card>
            <!-- END NAVBAR PRIMARY NAV SHAPPING -->
            <!-- START NAVBAR PRIMART NAV TOGGLE -->
            <app-button-toggle></app-button-toggle>
            <!-- END NAVBAR PRIMART NAV TOGGLE -->
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
// ALL IMPORT
import NoteBar from "./NoteBar";
import ShappingCard from "./ShappingCard";
import ButtonToggle from "./ButtonToggle";
import { maxHeaderSize } from "http";

export default {
  data() {
    return {
      navbarItems: "",
      arrayLang: "",
      arrayCur: "",
      statusHover: true,
      statusClick: true,
      lang: "en",
      cur: "usd",
      st: true,
      duration: .5
    };
  },
  methods: {

    // ANIMATION SEARCH HOME
    animationSearchHome(e) {
      // IF STATUS CLICK EQUAL TRUE WILL CONVERT PREVENT DEFAULT IF NO WILL CONVERT FALSE NO PREVENT DEFAULT
      if (this.statusClick && window.innerWidth > 900) e.preventDefault();

      // ALL VARIABLES
      const searchIcon = document.getElementById("home-button-search");
      const searchInput = document.getElementById("home-search");
      const navbarItems = document.getElementById("navbar-primary").children;
      let tl = new TimelineMax();

      // HOVER MANGER
      if (this.statusHover && window.innerWidth > 900) {
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
          {
            width: "50%",
            autoAlpha: 1,
            border: ".5px solid #bae9ff",
            padding: "0 1.5rem",
            ease: Power1.easeInOut
          }
        );

        // FUNCTION OPTION ALL ADD EVENT LISTENER
        const option = () => {
          tl.reverse();
          if (!searchInput.value == "") this.statusClick = false;
          searchInput.value = "";
          this.statusHover = true;
        };

        // IF USER CLICK WINDOW
        window.addEventListener("click", option);

        // IF USER KEY DOWN KEY CODE ENETER SEARCH WILL STATUS CLICK CONVERT FALSE AND CLEAR PREVENT DEFAULT
        searchInput.addEventListener("keydown", e => {
          if (e.keyCode == 13) {
            if (!searchInput.value == "") this.statusClick = false;
          }
        });

        // IF USER CLICK IN INPUT FIELD NOT CLOSE INPUT
        searchInput.addEventListener("click", e => e.stopPropagation());

        // IF USER BLUR INPUT
        searchInput.addEventListener("blur", option);
      }
    },

    // VALIDATION INPUT RESPONSIVE
    validationInputResponsive() {
      // INPUTSEARCH
      const inputsearch = this.$refs.inputsearch;

      // VALIDATION IF WINDOW WIDTH <= 900
      if (window.innerWidth <= 900) {
        inputsearch.addEventListener("blur", () => {
          if (!inputsearch.value == "") inputsearch.value = "";
        });
      }
    },

    // ANIMATION OPTIONS LIST
    animationOptionsList(e) {
      const childParent = e.target.closest(":not(div)").parentElement.parentElement.children;

      // ACCESS ELEMENT WITH FOR ES6
      for (const cur in childParent) {
        // IF ELEMENT EQUAL TAG UL
        if (childParent[cur].nodeName == "UL") {
          // CONST ELEMENT
          const element = childParent[cur];

          // TRIGGER ANIAMTION WITH TWEENMAX
          if (!childParent[cur].classList.contains("active")) {
            // ADD CLASS ACTIVE TO ELEMENT
            childParent[cur].classList.add("active");

            // CREATE ANIAMTION OPEN LIST ITEM
            TweenMax.set(element, { height: "100px", overflow: "scroll" });
            TweenMax.from(element, this.duration, { height: 0, ease: Power1.easeInOut });
          } else {
            // REMOVE CLASS ACTIVE FROM ELEMENT
            childParent[cur].classList.remove("active");

            // CREATE ANIMATION CLOSE LIST ITEM
            TweenMax.fromTo(
              element,
              this.duration,
              { height: "100px" },
              { height: 0, ease: Power1.easeInOut }
            );
          }
        }
      }
    },

    // GET DATA SELECT LIST
    getDataSelect(e) {
      // ALL VARIABLES
      let getData = e.target.textContent;
      const parent = e.target.parentElement.parentElement.children;
      const parentSelect = e.target.parentElement;

      for (const cur in parent) {
        if (parent[cur].id == "cur") {
          this.cur = getData;
          if (parent[cur].children[cur].nodeName == "SPAN") {
            parent[cur].children[cur].textContent = this.cur;

            // RUNNING FUNCTION CLOSE LIST
            this.closeList(parentSelect);
          }
        } else if (parent[cur].id == "lang") {
          this.lang = getData;
          if (parent[cur].children[cur].nodeName == "SPAN") {
            parent[cur].children[cur].textContent = this.lang;

            // RUNNING FUNCTION CLOSE LIST
            this.closeList(parentSelect);
          }
        }
      }
    },

    //
    closeList(parentSelect) {
      // ADD CLASS ACTIVE TO ELEMENT
      parentSelect.classList.remove("active");

      // CREATE ANIMATION CLOSE LIST ITEM
      TweenMax.fromTo(
        parentSelect,
        this.duration,
        { height: "100px" },
        { height: 0, ease: Power1.easeInOut }
      );
    },

    // CLICK WINDOW
    clickWindow() {
      // ALL VARIABLES
      const dataSelectLang = document.getElementById("dataSelectLang");
      const dataSelectCur = document.getElementById("dataSelectCur");
      const elements = [dataSelectLang, dataSelectCur];

      // IF CLICK WINDOW WILL BE CLOSE ALL LIST CURRANCY AND LANGUAGE
      window.addEventListener("click", () => {
        for (const cur in elements) {
          if (elements[cur].clientHeight > 0) this.closeList(elements[cur]);
        }
      });
    },

  },
  computed: {
    
    // GET FORM STATE
    getFromState() {
      this.navbarItems = this.$store.state.navbarItems;
      this.arrayLang = this.$store.state.arrayLang;
      this.arrayCur = this.$store.state.arrayCur;
    },

    // PADDING BODY
    paddingBody() {

      if (this.$route.name !== "home" && window.innerWidth > 900) {

        const navbar = document.getElementById("navbar");
        const getHeightNavbar = window.getComputedStyle(navbar);

        document.body.style.paddingTop = getHeightNavbar.height;

      } else {

        document.body.style.paddingTop = "0";

      }

    },
  },
  components: {
    appShappingCard: ShappingCard,
    appNoteBar: NoteBar,
    appButtonToggle: ButtonToggle
  },
  mounted() {
    // RUN COMPUTED
    this.getFromState;

    // RUNNING CLICK WINDOW
    this.clickWindow();
  }
};
</script>

<style>
</style>