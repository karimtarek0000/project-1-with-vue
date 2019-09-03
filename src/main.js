// ASSETS
import 'sass/style';
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import { router } from './router';
import { store } from './store/store';
import { TweenMax, TimelineMax } from 'greensock';

//
Vue.use(VueResource);

// RENDER
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
