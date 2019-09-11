// STATE
const state = {
    arrayProducts: []
}

// GETTERS
const getters = {

    // CALC ALL PRICE
    calcAllPrice: state => {
        const el = state.arrayProducts;
        let count = 0;

        // FOR ALL INDEX ARRAY AND SUM ALL PRICE INTO ARRAY
        for(const cur in el) {
            count+= parseInt( el[cur].price.match(/\d/g).join('') );
        }

        // RETURN
        return `$${count}`

    }
}

// EXPORT ALL
export default {
    state,
    getters
}