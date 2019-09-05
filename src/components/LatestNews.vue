<template>
  <section class="latest_news">
    <!-- START CONTAINER -->
    <div class="container">
      <!-- LATEST NEWS BOX -->
      <div class="latest_news_box text-capitalize">
        <!-- LATEST NEWS HEADING -->
        <div class="latest_news_heading text-center">
          <h2 class="latest_news_heading_head">latest news</h2>
          <p class="latest_news_heading_par">praesent mauris fusce nec tellus sed augue semper porta</p>
        </div>

        <!-- LATEST NEWS ARTICALES -->
        <div class="latest_news_articales text-capitalize">
          <!-- LATEST NEW ARTICALES BOX -->
          <div class="latest_news_articales_box" v-for="(array, index) in arrays">
            <img class="latest_news_articales_img" :src="getImages(index)" :alt="'img-' + index" />
            <div class="latest_news_articales_content">
              <h4 class="latest_news_articales_head">Porem ipsum dolor sit ame</h4>
              <p class="latest_news_articales_title">Lorem Ipsum Proin gravida nibh</p>
              <p class="latest_news_articales_par">{{ array[0] }}</p>
              <p class="latest_news_articales_more_par display-none">{{ array[1] }}</p>
              <a
                @click.prevent="getContent"
                href="#"
                class="latest_news_articales_more_btn btn-primary reset-link"
              >read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END CONTAINER -->

  <!-- START COMPONENT MODAL -->
    <modal
      :alt="alt"
      :src="src"
      :head="head"
      :title="title"
      :par="par"
      :morePar="morePar"
      v-if="show"
      @close="show = false"
    ></modal>
    <!-- END COMPONENT MODAL -->
  </section>
</template>

<script>
import Modal from "./modal";

export default {
  data() {
    return {
      arrays: [],
      shortPar: 9,
      src: "",
      alt: "",
      head: "",
      title: "",
      par: "",
      morePar: "",
      show: false
    };
  },
  methods: {
    // GET WORDS
    getWords() {
      // GET URL API
      this.$http
        .get("https://baconipsum.com/api/?type=meat-and-filler&paras=3")

        // THAN
        .then(
          data => {
            // SPICIFIC DATA OBJECT IN BODY ONLY
            const body = data.body;

            // LOOP IN BODY ARRAY
            for (const cur in body) {
              let splitBody = body[cur].split(" "),
                shortBody =
                  splitBody.slice(0, this.shortPar).join(" ") + " ...",
                longBody = splitBody
                  .slice(this.shortPar, splitBody.length)
                  .join(" "),
                arrShortLong = [shortBody, longBody];

              // PUSH ALL CHANGE TO ARRAYS IN VUE DATA
              this.arrays.push(arrShortLong);
            }

            // ERROR
          },
          error => {
            // ALERT IN WINDOW IF ERROR FROM AJAX
            alert("sorr'y try again reload site your internet slow");
          }
        );
    },

    // GET IMAGES
    getImages(index) {
      return `../assets/img/latest-news/articales/img-${index}.png`;
    },

    // GET CONTENT
    getContent(e) {

      // SWITCH THIS SHOW TO TRUE
      this.show = true;

      // ALL VARIABLE
      const getParents = Array.from(
        e.target.parentElement.parentElement.children
      );
      const getParentBtnTarget = Array.from(e.target.parentElement.children);
      const classImage = "latest_news_articales_img";
      const classHead = "latest_news_articales_head";
      const classTitle = "latest_news_articales_title"
      const classParagraph = "latest_news_articales_par";
      const classMoreParagraph = "latest_news_articales_more_par";

      // FOR EACH PARENTS ELEMENT
      getParents.forEach(cur => {
        if (cur.classList.contains(classImage)) {
          this.src = cur.src;
          this.alt = cur.alt;
        }
      });

      // FOR EACH PARENT ELEMENT
      getParentBtnTarget.forEach(cur => {
        if (cur.classList.contains(classHead)) {
          this.head = cur.textContent;
        } else if (cur.classList.contains(classParagraph)) {
          this.par = cur.textContent.replace("...", "");
        } else if (cur.classList.contains(classMoreParagraph)) {
          this.morePar = cur.textContent;
        } else if (cur.classList.contains(classTitle)) {
          this.title = cur.textContent;
        }
      });
    }
  },
  watch: {

    // WATCH SHOW
    show(el) {
      el ?  document.body.style.overflow = 'hidden' :  document.body.style.overflowY = 'visible';
    }
  },
  components: {
    Modal
  },
  mounted() {
    // RUNNING GET WORDS => AJAX
    this.getWords();
  }
};
</script>

<style>

/* TRANSITION MODAL */
.modal-enter-active {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.modal-leave-active {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
</style>