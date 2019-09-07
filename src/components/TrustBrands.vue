<template>
    <section class="trust_brands">

        <!-- START CONTAINER -->
        <div class="container">

            <!-- START TRUST BRANDS BOX -->
            <div id="brands" class="trust_brands_box text-center">

                <div>
                    <svg>
                        <use xlink:href="../assets/img/sprit.svg#icon-logo-1"></use>
                    </svg>
                </div>

                <div>
                    <svg>
                        <use xlink:href="../assets/img/sprit.svg#icon-logo-2"></use>
                    </svg>
                </div>

                <div>
                    <svg>
                        <use xlink:href="../assets/img/sprit.svg#icon-logo-3"></use>
                    </svg>
                </div>

                <div>
                    <svg>
                        <use xlink:href="../assets/img/sprit.svg#icon-logo-4"></use>
                    </svg>
                </div>

                <div>
                    <svg>
                        <use xlink:href="../assets/img/sprit.svg#icon-logo-5"></use>
                    </svg>
                </div>

                <div>
                    <svg>
                        <use xlink:href="../assets/img/sprit.svg#icon-logo-1"></use>
                    </svg>
                </div>

            </div>
            <!-- END TRUST BRANDS BOX -->

        </div>
        <!-- END CONTAINER -->
    </section>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            count: 0,
            durationTimeOut: 2000,
            durationSetInterVal: 4000

        }
    },
    methods: {

        // BRANDS
        brands() {

            // ALL VARIABLES
            const parentBrands = document.getElementById('brands').children;
            const countParentChild = parentBrands.length-1 
            
            // IF STATEMENT WINDOW WIDTH GT 900
            if(window.innerWidth > 900) {

                // ALL ACTION WILL BE RUNNING SETINTERVAL
                setInterval(() => {
                    
                    // IF STATEMENT COUNT 
                    if(this.count > countParentChild) {
                        this.count = 0;
                    } else if (this.count < 0) {
                        this.count = countParentChild;
                    }
    
                    // CHNAGE OPACITY CHILD BRANDS
                    parentBrands[this.count].style.opacity = 1;
    
    
                    // SET TIME OUT WILL BE CHANGE OPACITY AND INCREASE COUNT
                    setTimeout( () => {
                        
                        // OPACITY CHILD BRANDS
                        parentBrands[this.count].style.opacity = .5;
    
                        // INCREASE COUNT
                        this.count++;
    
                    }, this.durationTimeOut);
    
    
                }, this.durationSetInterVal);

            }
        }
        
    },
    mounted() {

        // RUNNING BRANDS
        this.brands();
    }
};
</script>

<style>
</style>