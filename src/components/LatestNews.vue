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
        <div class="latest_news_articales">

          <!-- LATEST NEW ARTICALES BOX -->
          <div class="latest_news_articales_box" v-for="(array, index) in arrays">
            <img
              class="latest_news_articales_img"
              :src="getImages(index)"
              :alt="'img-' + index"
            />
            <div class="latest_news_articales_content">
              <h4 class="latest_news_articales_head">Porem ipsum dolor sit ame</h4>
              <p class="latest_news_articales_title">Lorem Ipsum Proin gravida nibh</p>
              <p class="latest_news_articales_par">{{ array[0] }}</p>
              <p class="latest_news_articales_more_par display-none">{{ array[1] }}</p>
              <a href="#" class="latest_news_articales_more_btn btn-primary reset-link">read more</a>

            </div>
          </div>

         

        </div>
      </div>
    </div>
    <!-- END CONTAINER -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrays: [],
      shortPar: 10
    }
  },
  methods: {

    // GET WORDS
    getWords() {

      // GET URL API
      this.$http.get('https://baconipsum.com/api/?type=meat-and-filler&paras=3')

          // THAN
          .then(data => {

            // SPICIFIC DATA OBJECT IN BODY ONLY
            const body = data.body;

            // LOOP IN BODY ARRAY
            for(const cur in body) {
                let splitBody = body[cur].split(" "),
                shortBody = splitBody.slice(0, this.shortPar).join(" ") + ' ...',
                longBody = splitBody.slice(this.shortPar, splitBody.length).join(" "),
                arrShortLong = [shortBody, longBody];

                // PUSH ALL CHANGE TO ARRAYS IN VUE DATA
                this.arrays.push(arrShortLong);
            }

          // ERROR
          }, error => {

            // ALERT IN WINDOW IF ERROR FROM AJAX
            alert("sorr'y try again reload site your internet slow");

          });
    },

    // GET IMAGES
    getImages(index) {
      return `../assets/img/latest-news/articales/img-${index}.png`;
    }

  },
  mounted() {

    // RUNNING GET WORDS => AJAX
    this.getWords();
    
  }
};
</script>

<style>
</style>