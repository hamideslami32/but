<template>
  <div class="main">
    <div class="main__content">
      <span class="main__content__title">Nice to see you.</span>
      <div class="main__content__description">
        <span
          >Hi My name is Vali and I`m a Product Designer & User Experience
          Researcher</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 140px 0 140px;
  background-image: url("/image/homepage-desktop.png");
  background-position: center;
  background-size: cover;
  &__content {
    width: 45%;
    height: 40%;
    margin-bottom: 100px;
    color: rgb(56, 55, 55);
    &__title {
      font-size: 80px;
      font-weight: bold;
    }
    &__description {
      width: 500px;
      font-size: 18px;
    }
  }
}
@media only screen and (max-width: 1054px) {
  .main {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 20px;
    &__content {
      width: 100%;
      height: 40%;
      color: rgb(56, 55, 55);
      &__title {
        font-size: 80px;
        font-weight: 500;
      }
      &__description {
        width: 100%;
      }
    }
  }
}
</style>
