<template>
</template>
<script>

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>