import axios from 'axios'

const state = {
    order: {}
}

const getters = {
    order: state => state.order
}

const actions = {
    saveOrder: async ({ commit }, order) => {
        const response = await axios.post('/api/orders', order)
        commit('SAVE_ORDER', response.data)
    }
}

const mutations = {
    'SAVE_ORDER'(state, order) {
        state.order = order
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}