// ALL IMPORT
import Vue from 'vue';
import Vuex from 'vuex';

// USE VUEX INTO VUE
Vue.use(Vuex);

// INIT STORE
export const store = new Vuex.Store({
    state: {
        navbarItems: ["/", "shop", "product", "blog", "portfolio", "page"],
        arrayLang: ["en", "fr", "ar", "co"],
        arrayCur: ["egp", "usd", "eur"],
        
        product: 'new product',
        price: 55
    },
    getters: {
       
    }
});