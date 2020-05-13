const state = {
    cart: []
};

const getters = {
    cart: state => state.cart
};

const actions = {
    addToCart: ({ commit }, book) => {
        commit('ADD_TO_CART', book);
    }
};

const mutations = {
    'ADD_TO_CART'(state, book) {
        state.cart.push(book);
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}