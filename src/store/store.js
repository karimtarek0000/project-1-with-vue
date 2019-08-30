// ALL IMPORT
import Vue from 'vue';
import Vuex from 'vuex';

// USE VUEX INTO VUE
Vue.use(Vuex);

// INIT STORE
export const store = new Vuex.Store({
    state: {
        product: 'new product',
        price: 55
    },
    getters: {
        getProduct: state => {
            return state.product;
        },
        getPrice: state => {
            return `$ ${state.price}`;
        }
    }
});