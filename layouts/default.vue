<template>
  <div class="main-container">
    <div class="main-container__header">
      <Header />
    </div>
    <div class="main-container__content">
      <Nuxt />
    </div>
    <div class="main-container__footer">
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>
<style lang="scss" scoped>
.main-container {
  position: relative;
  &__header {
    z-index: 1;
    position: sticky;
    top: 0;
				background: white;
    width: 100%;
    color: #0466c8b8;
  }
  &__footer{
     width: 100%;
  }
}
</style>
