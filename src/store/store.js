import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allConversions: []
    },

    mutations: {
        addConversions(state, payload) {
            state.allConversions.push(payload);
        }
    },
    actions: {
        async addConversions(state){
            const Conversion = await fetch()
        }
    },
    getters: {
        getAllConversions: state => state.allConversions
    },
    actions: {

    }
});