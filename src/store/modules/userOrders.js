import axios from 'axios'  //todo: axios-auth

const state = {
    userOrders: []
}

const getters = {
    userOrders: state => state.userOrders
}

const actions = {
    getUserOrders: async ({ commit }, id) => {
        const response = await axios.post(`/api/users/${id}/orders`)
        commit('SAVE_USER_ORDERS', response.data)
    }
}

const mutations = {
    'SAVE_USER_ORDERS'(state, userOrders) {
        state.userOrders = userOrders
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}