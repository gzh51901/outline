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
        updateToken(state, token) {
            state.token = token
        },
        updateLoginStatus(state, status){
            state.loginStatus = status
        }
    }
}

// this.$store.commit('updateToken','xxxxxx')
// this.$store.commit('updateloginStatus',)