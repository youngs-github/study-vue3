import { createStore } from 'vuex';

export default createStore({
    state: {
        a: 1,
        b: 2
    },
    mutations: {
        getA(state) {
            return state.a;
        },
        getB(state) {
            return state.b;
        }
    },
    actions: {},
    modules: {}
});
