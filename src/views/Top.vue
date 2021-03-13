<template>
  <div class="home">
    <div class="top-area">
      <img class="top-img" src="../assets/zekkei_mv.jpg">
    </div>
    <div class="btn-create">
      <v-btn class="mx-2" fab dark color="#715841" to="/trips/new">
        <v-icon dark>
            mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
}
</script>

<style>
.top-area img {
  width: 100%;
  height: auto;
}
.btn-create {
  width: 70px;
  height: 60px;
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>