import { createStore } from 'vuex'
import count from './count'

// Create a new store instance.
const store = createStore({
  modules: {
    count,
  }
})

export default store