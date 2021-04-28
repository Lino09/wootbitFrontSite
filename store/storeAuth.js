
export const state = () => ({
    userToken: 'falseToken'
  })
  export const mutations = {
    CHANGE_TOKEN(state, payload){
      state.userToken = payload
    },
    kill_token(state){
      state.userToken = ''
    }
  }
  export const actions = {
    change_token: ({commit}, payload) => {
      commit('CHANGE_TOKEN', payload)
    }
  }
  export default {
    state,
    mutations,
    actions,
  };