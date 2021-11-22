import { createStore, createLogger } from 'vuex'
import count from './modules/count'
import products from './modules/products'
import cart from './modules/cart'

const debug = process.env.NODE_ENV !== 'production'

// Create a new store instance.
const store = createStore({
  modules: {
    count,
    products,
    cart,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store