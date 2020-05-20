const state = {
    order: {}
}

const getters = {
    order: state => state.order
}

const actions = {
    saveOrder: ({ commit }, order) => {
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