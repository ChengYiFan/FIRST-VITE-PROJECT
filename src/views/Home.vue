<template>this is home</template>
<script>
export default {
  mounted() {
    this.increment()
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>