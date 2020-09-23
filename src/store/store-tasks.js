import Vue from 'vue'

const state = {
  tasks: {
    ID1: { name: 'get apples', completed: false, dueDate: '2019/05/013', dueTime: '18:30' },
    ID2: { name: 'get money', completed: false, dueDate: '2019/05/014', dueTime: '12:20' },
    ID3: { name: 'get a wife', completed: false, dueDate: '2019/05/015', dueTime: '11:10' }
  }
}

const mutations = {
  updateTask (state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask (state, id) {
    Vue.delete(state.tasks, id)
  }
}

const actions = {
  updateTask ({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask ({ commit }, id) {
    commit('deleteTask', id)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
