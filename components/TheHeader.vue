<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
        <a class="navbar-brand" href="#">Shop</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <n-link class="nav-link" :to="{name: 'home'}">Home <span class="sr-only">(current)</span></n-link>
            </li>
            <li class="nav-item">
              <n-link class="nav-link" :to="{name:'cards'}">Cards</n-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <n-link class="btn btn-outline-success mr-2" :to="{name: 'login'}" role="button">Login</n-link>
            <n-link class="btn btn-outline-primary" :to="{name: 'registration'}" role="button">Registration</n-link>
          </form>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>

</style>
