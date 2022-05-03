<template>
  <div class="title">
    <div class="title__content">
      <a class="title__content__btn" href="/">
        <i class="ri-arrow-left-line"></i>
        {{ goBack }}
      </a>
      <span class="title__content__text">
        {{ description }}
      </span>
    </div>
    <div class="title__page-title">
      <span class="title__page-title__text">
        {{ pageTitle }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    description: {
      type: String,
      default: '',
    },
    pageTitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      goBack: 'Back To Home',
    }
  },
}
</script>

<style lang="scss" scoped>
.title {
    margin: 90px 0 0 0;
  &__content {
    display: flex;
    flex-direction: column;
    margin: 90px 140px 0 140px;
    &__btn {
      font-weight: 200;
      display: flex;
      align-items: center;
    }
    &__text {
      font-size: 40px;
      font-weight: 500;
      margin: 20px 0 0 0;
    }
  }
  &__page-title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px 0 90px 0;
    font-size: 60px;
    font-weight: 500;
  }
}
@media only screen and (max-width: 960px) {
  .title {
      margin: 30px 0 0 0;
    &__content {
      display: flex;
      flex-direction: column;
      margin: 130px 16px 0 16px;
    }
    &__page-title {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      font-weight: 500;
    }
  }
}
</style>
