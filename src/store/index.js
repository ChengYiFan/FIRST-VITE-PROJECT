import { createStore, createLogger } from 'vuex'
import count from './modules/count'
import products from './modules/products'

const debug = process.env.NODE_ENV !== 'production'

// Create a new store instance.
const store = createStore({
  modules: {
    count,
    products,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store