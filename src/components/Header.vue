<template>
  <header>
    <VAppBar app elevate-on-scroll color="primary">
      <VToolbarTitle>
        <VBtn @click="moveToTop()" x-large depressed color="primary black--text">Torimo</VBtn>
      </VToolbarTitle>

      <VSpacer></VSpacer>

    </VAppBar>
  </header>
</template>

<script>
export default {
	methods: {
    moveToTop() {
      this.$router.push({name: 'Home'}, () => {})
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style>

</style>