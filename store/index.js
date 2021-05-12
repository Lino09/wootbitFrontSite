export const state = () => ({
    newProject: {}
  })
  export const mutations = {
    updateNewProject(state,payload) {
      state.newProject = payload
    }
  }