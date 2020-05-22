import axios from 'axios'

const state = {
    order: undefined
}

const getters = {
    order: state => state.order
}

const actions = {
    saveOrder: async ({ commit }, order) => {
        const response = await axios({
            method: 'post',
            url: '/api/orders',
            data: order,
            headers: { 'Content-Type': 'application/json;charset=UTF-8' }
        })
        order.id = response.data.id
        commit('SAVE_ORDER', order)
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