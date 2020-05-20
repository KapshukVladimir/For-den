<template>
  <div class="cards-list">
    <h1>Cards</h1>
    <cards-list-item v-for="card of cards" :key="card.id" :card="card" />
  </div>
</template>

<script>
import CardsListItem from './CardsListItem'
export default {
  name: 'CardsList',
  components: { CardsListItem },
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .cards-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .card-img-top{
    height: 189px;
  }
  .card {
    margin: 20px 0;
  }
</style>
