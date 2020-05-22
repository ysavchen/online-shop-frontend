import axios from 'axios'

const state = {
    token: undefined,
    user: undefined
}

const getters = {
    token: state => state.token,
    user: state => state.user
}

const actions = {
    register: async ({ commit }, user) => {
        const response = await axios({
            method: 'post',
            url: '/api/register',
            data: user,
            headers: { 'Content-Type': 'application/json;charset=UTF-8' }
        })
        commit('SET_TOKEN', response.data.token)
        commit('SET_USER', response.data.user)
    },
    login: async ({ commit }, user) => {
        const response = await await axios({
            method: 'post',
            url: '/api/login',
            data: user,
            headers: { 'Content-Type': 'application/json;charset=UTF-8' }
        })
        commit('SET_TOKEN', response.data.token)
        commit('SET_USER', response.data.user)
    },
    logout: ({ commit }) => {
        commit('SET_TOKEN', undefined)
        commit('SET_USER', undefined)
    },
}

const mutations = {
    'SET_TOKEN'(state, token) {
        state.token = token
    },
    'SET_USER'(state, user) {
        state.user = user
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}