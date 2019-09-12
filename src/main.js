// ASSETS
import 'sass/style';
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import { router } from './router';
import { store } from './store/store';
import { TweenMax, TimelineMax } from 'greensock';

// USE VUE RESOURCE
Vue.use(VueResource);

// CENTER
export const center = new Vue({

    methods: {

        // HAS CLASS
        hasClass(el, className) {

            const arrayClass = el.classList;

            for (const cur in arrayClass) {

                if (arrayClass[cur] == className) return true

            }

        }

    }

});

// DISPLAY WARNING
Vue.config.productionTip = false;

// RENDER
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
