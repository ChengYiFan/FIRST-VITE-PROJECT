const count = {
  namespaced: true,
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done).length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  actions: {
    // increment: (context) => {
    //   context.commit('increment')
    // }
    increment ({ commit }) {
      commit('increment')
    }
  }
}
export default count