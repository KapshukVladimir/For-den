<template>
  <div class="wrap">
    <div class="container">
      <cards-list :cards="cards" />
      <pre>
        {{ cards }}
      </pre>
    </div>
  </div>
</template>

<script>
import CardsList from '../components/CardsList'
export default {
  name: 'Cards',
  components: { CardsList },
  async asyncData ({ $axios }) {
    let cards = []
    try {
      cards = await $axios.$get('/cards')
    } catch (e) {
      console.log(e)
    }
    return { cards }
  }
}
</script>

<style scoped>

</style>
