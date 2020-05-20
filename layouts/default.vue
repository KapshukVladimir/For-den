<template>
  <div>
    <TheHeader />
    <div class="container mt-100">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item"><n-link :to="{name: 'home'}">Home</n-link></li>
          <li class="breadcrumb-item"><n-link :to="{name: 'cards'}">Cards</n-link></li>
          <li class="breadcrumb-item active" v-if="data" aria-current="page">Data</li>
        </ol>
      </nav>
      <hr>
      <nuxt />
    </div>
  </div>
</template>
<script>

import TheHeader from '../components/TheHeader'

export default {
  components: { TheHeader }
}
</script>
<style>
.mt-100{
  margin-top: 80px;
}

</style>
