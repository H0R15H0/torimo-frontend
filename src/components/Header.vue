<template>
  <header>
    <VAppBar app elevate-on-scroll color="primary">
      <VToolbarTitle>
        <VBtn
          @click="moveToTop()"
          x-large
          depressed
          class="font-weight-bold font-italic font-weight-bold text-h4 pa-2"
          color="primary accent--text"
          style="text-transform: none"
          >Trimo</VBtn>
      </VToolbarTitle>

      <VSpacer></VSpacer>

    </VAppBar>
  </header>
</template>

<script>
export default {
	methods: {
    moveToTop() {
      this.$router.push({name: 'Top'}, () => {})
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style>

</style>