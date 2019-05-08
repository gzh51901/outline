/**
 * 购物车的数据
 */

export default {
    // 初始数据（购物车的数据）
    state: {
        token: '',
        loginStatus: false
    },
    mutations: {
        login(state, token) {
            state.token = token
            state.loginStatus = true
        },
        logout(state){
            state.token = ''
            state.loginStatus = false;

        }
    }
}

// this.$store.commit('updateToken','xxxxxx')
// this.$store.commit('updateloginStatus',)