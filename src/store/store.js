import { createStore } from 'vuex'

export default createStore({
    state: {
        conversions: [
            {
                baseAmount: '', 
                baseCurrencyType:'', 
                rate:'', 
                Result:'', 
                secondCurrencyType:''
            }
        ]
    },

    mutations: {
        UPDATE_CONVERSIONS(state, payload) {
            state.conversions = payload
        }
    },
    actions: {
        addConversion(context, payload){
            const conversions = context.state.conversions
            conversions.push(payload)
            context.commit('UPDATE_CONVERSIONS', conversions)
        } 
    },
    getters: {
        getAllConversions: state => state.conversions
    },
});