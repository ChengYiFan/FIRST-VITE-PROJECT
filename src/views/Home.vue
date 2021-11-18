<template>
  this is home
  <div>count: {{count}}</div>
  <div>doneTodosCount: {{doneTodosCount}}</div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  mounted() {
    this.increment()
  },
  computed: {
    ...mapState({
      count: state => state.count.count
    }),
    doneTodosCount () {
      return this.$store.getters['count/doneTodos']
      // this.$store.getters.getTodoById(2).length
    }
  },
  methods: {
    increment() {
      // this.$store.commit('increment')
      this.$store.dispatch('count/increment')
    }
  }
}
</script>