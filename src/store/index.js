import { createStore, createLogger } from 'vuex'
import count from './modules/count'

const debug = process.env.NODE_ENV !== 'production'

// Create a new store instance.
const store = createStore({
  modules: {
    count,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store