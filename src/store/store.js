// ALL IMPORT
import Vue from 'vue';
import Vuex from 'vuex';
import ShappingCard from './modules/ShappingCard';

// USE VUEX INTO VUE
Vue.use(Vuex);

// INIT STORE
export const store = new Vuex.Store({
    state: {
        navbarItems: ["/", "shop", "product", "blog", "portfolio", "page"],
        arrayLang: ["en", "fr", "ar", "co"],
        arrayCur: ["egp", "usd", "eur", "test", "test"]
    },
    modules: {
        ShappingCard
    }
});