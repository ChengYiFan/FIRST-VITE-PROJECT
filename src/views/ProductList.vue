<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id"
    >
      {{ product.title }} - {{ currency(product.price) }}
      <br>
      <button :disabled="!product.inventory">
        Add to cart
      </button>
    </li>
  </ul>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { currency } from '../utils/currency'

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  created () {
    this.$store.dispatch('products/getAllProducts')
  },
  methods: {
    ...mapActions('cart', [
      'addProductToCart'
    ]),
    currency
  }
}
</script>