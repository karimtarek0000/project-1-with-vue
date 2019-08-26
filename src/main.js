// ASSETS
import 'sass/style';
import Vue from 'vue';
import App from './App';
import { router } from './router';
import { TweenMax, TimelineMax } from 'greensock';

// RENDER
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

