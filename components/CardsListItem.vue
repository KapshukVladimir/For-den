<template>
  <div class="card" style="width: 18rem;">

    <div class="card-body">
      <h5 class="card-title">
        {{ card.title }}
      </h5>
      <p class="card-price">
        {{ card.price }}
      </p>
      <n-link :to="{ name: 'detail', params: { id: card.id }}" class="btn btn-primary">Go to Detail</n-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardsListItem',
  props: {
    cards: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
