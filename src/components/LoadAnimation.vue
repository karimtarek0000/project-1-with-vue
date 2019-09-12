<template>

    <div id="loadAnimation" class="load_animation">

        <!-- START LOAD ANIMATIOB INNER -->
        <ul class="load_animation_inner list-unstyled">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <!-- END LOAD ANIMATIOB INNER -->

    </div>
    
</template>

<script>
export default {
    methods: {

        // LOAD ANIMATION
        loadAnimation() {

            // ALL VARIABLES
            const parentLoadAnimation = document.getElementById('loadAnimation'),
            parentLoadAnimationchildren = document.querySelector('.load_animation_inner').children,
            tl = new TimelineMax({ repeat: 15, onComplete: loadPage });
            

            tl  
                .set(document.body, {overflow: 'hidden'} )
                .staggerFromTo(parentLoadAnimationchildren, .3, {scaleY: 0, autoAlpha: 0}, { cycle: { scaleY: [1, 1.2, 1.4, 1.6, 1.8, 2] }, autoAlpha: 1, 'transform-origin': 'bottom', ease:Power1.easeInOut }, .2)


            // START OPEN SITE AFTER LOAD SITE
            function loadPage() {

                const tlOut = new TimelineMax();

                tlOut
                    .to(parentLoadAnimationchildren, .3, {scaleY: 0, autoAlpha: 0, ease:Power1.easeOut} )
                    .to(parentLoadAnimation, .5, {height: 0, 'transform-origin': 'top'}, '+=.5' )
                    .set(document.body, { clearProps: 'all'})

            }

        }
    },
    mounted() {

        // RUNNING LOAD ANIMATION
        this.loadAnimation();
    }
};
</script>

<style>
</style>