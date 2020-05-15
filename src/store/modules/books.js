import axios from 'axios'

const state = {
    books: {}
};

const getters = {
    books: state => state.books
};

const actions = {
    initStore: ({ commit }) => {
        axios.get('/api/books')
            .then((response) => {
                commit('SET_STORE', response.data)
            });
    }
};

const mutations = {
    'SET_STORE'(state, books) {
        state.books = books;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}