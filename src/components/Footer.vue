<template>
    <footer class="footer">

        <!-- START CONTAINER -->
        <div class="container">

            <!-- START FOOTER SECTIONS -->
            <div class="footer_sections text-capitalize">

                <!-- FOOTER SECTION ONE -->
                <div class="footer_section_one">
                    
                    <div class="footer_section_one_box footer_section_one_box--1">
                        <h3 class="footer_section_one_head">about company</h3>
                        <p class="footer_section_one_par">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptas sed aspernatur maiores quo officia dolore tempore, repellendus corrupti tenetur!</p>
                        <ul class="footer_section_one_content list-unstyled">
                            <li class="footer_section_one_content_item">
                                <i class="fas fa-map-marker-alt fa-fw"></i>
                                <span>0123  main road, your city, ny 123456</span>
                            </li>
                            <li class="footer_section_one_content_item">
                                <i class="fas fa-phone-alt fa-fw"></i>
                                <span>(000) 2345 - 6789</span>
                            </li>
                            <li class="footer_section_one_content_item">
                                <i class="fas fa-envelope fa-fw"></i>
                                <span class="text-lowercase">info@psdfreebies.com</span>
                            </li>
                        </ul>
                    </div>

                    <div class="footer_section_one_box footer_section_one_box--2">
                        <h3 class="footer_section_one_head">my account</h3>
                        <ul class="footer_section_one_content list-unstyled">
                            <li class="footer_section_one_content_item cursor-pointer">
                               <span>my account</span> 
                            </li>
                            <li class="footer_section_one_content_item cursor-pointer">
                             <span>contact</span>
                            </li>
                            <li class="footer_section_one_content_item cursor-pointer">
                             <span>frequently questions</span>
                            </li>
                            <li class="footer_section_one_content_item cursor-pointer">
                             <span>portfolio</span>
                            </li>
                            <li class="footer_section_one_content_item cursor-pointer">
                             <span>checkout</span>
                            </li>
                        </ul>
                    </div>

                    <div class="footer_section_one_box footer_section_one_box--3">
                        <h3 class="footer_section_one_head">products</h3>
                        <ul class="footer_section_one_content list-unstyled">
                            <router-link class="footer_section_one_content_item cursor-pointer" tag="li" :to="item" v-for="item in productsItem"> <span> {{ item == '/'? item = 'home': item }} </span></router-link>
                        </ul>
                    </div>

                    <div class="footer_section_one_box footer_section_one_box--4">

                        <div class="footer_section_one_box_social">
                            <h3 class="footer_section_one_head">follow us</h3>
                            <ul class="footer_section_one_content list-unstyled">
                                <li class="footer_section_one_content_item">
                                    <a class="footer_section_one_content_link reset-link cursor-pointer" href="#">
                                        <i class="fab fa-google-plus-g fa-fw"></i>
                                        <span>google +</span>
                                    </a>
                                </li>
                                <li class="footer_section_one_content_item">
                                    <a class="footer_section_one_content_link reset-link cursor-pointer" href="#">
                                        <i class="fab fa-pinterest fa-fw"></i>
                                        <span>pinterest</span>
                                    </a>
                                </li>
                                <li class="footer_section_one_content_item">
                                    <a class="footer_section_one_content_link reset-link cursor-pointer" href="#">
                                        <i class="fab fa-vimeo-v fa-fw"></i>
                                        <span>vimo</span>
                                    </a>
                                </li>
                                <li class="footer_section_one_content_item">
                                    <a class="footer_section_one_content_link reset-link cursor-pointer" href="#">
                                        <i class="fab fa-facebook-f fa-fw"></i>
                                        <span>facebook</span>
                                    </a>
                                </li>
                                <li class="footer_section_one_content_item">
                                    <a class="footer_section_one_content_link reset-link cursor-pointer" href="#">
                                        <i class="fab fa-twitter fa-fw"></i>
                                        <span>twitter</span>
                                    </a>
                                </li>
                                <li class="footer_section_one_content_item">
                                    <a class="footer_section_one_content_link reset-link cursor-pointer" href="#">
                                        <i class="fas fa-rss fa-fw"></i>
                                        <span>rss</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="footer_section_one_box_payment">
                            <h3 class="footer_section_one_head">payment methods</h3>

                            <ul class="footer_section_one_content list-unstyled">
                                <li>
                                    <i class="fab fa-cc-visa"></i>
                                </li>
                                <li>
                                    <i class="fab fa-cc-paypal"></i>
                                </li>
                                <li>
                                    <i class="fab fa-cc-mastercard"></i>
                                </li>
                                <li>
                                    <i class="fab fa-cc-apple-pay"></i>
                                </li>
                            </ul>
        
                        </div>

                    </div>

                </div>

                <!-- FOOTER SECTION TWO -->
                <div class="footer_section_two">

                    <ul class="footer_section_two_content list-unstyled">
                        <li class="footer_section_two_item" v-for="item in arrayFooter">
                            <a class="footer_section_two_link reset-link" href="#">{{ item }}</a>
                        </li>
                    </ul>

                    <div class="footer_section_two_copyright text-center">
                        <p>copyright &copy; {{ getDate }} karim tarek all right reserved </p>
                    </div>

                </div>

            </div>
            <!-- START FOOTER SECTIONS -->

        </div>
        <!-- END CONTAINER -->
    </footer>
</template>

<script>
import { maxHeaderSize } from 'http';
export default {
    data() {
        return {
            productsItem: '',
            languages: '',
            currancy: '',
            arrayFooter: ['sitemap', 'searchs', 'advance', 'searchs', 'contact Us'] 

        }
    },
    computed: {

        // GET FROM STATE
        getFromState() {
            this.productsItem = this.$store.state.navbarItems;
            this.languages = this.$store.state.arrayLang;
            this.currancy = this.$store.state.arrayCur;
        },

        // GET DATE
        getDate() {
            return new Date().getFullYear();
        }
    },
    mounted() {

        // RUN COMPUTED
        this.getFromState;
    }
};
</script>

<style>
</style>