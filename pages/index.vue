<template>
  <div class="main">
    <div class="main__content">
      <Main />
    </div>
    <div
      v-for="(item, index) in projectPages"
      :key="`home-page-${index}`"
      class="main__projects"
    >
      <Project
        :id="`0${index + 1}`"
        :type="'home'"
        :items="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      projectPages: [
        {
          title: 'JiJi kides',
          description: 'User Experience - Human Center Design',
          red: '38',
          green: '62',
          blue: '189',
          image: '/image/projects/think.jpg',
          newLable: true
        },
        {
          title: 'JiJi kides',
          description: 'User Experience - Human Center Design',
          red: '231',
          green: '159',
          blue: '159',
          image: '/image/projects/app.jpg',
        },
        {
          title: 'JiJi kides',
          description: 'User Experience - Human Center Design',
          red: '0',
          green: '0',
          blue: '0',
          image: '/image/projects/type.jpg',
        },
        {
          title: 'JiJi kides',
          description: 'User Experience - Human Center Design',
          red: '255',
          green: '0',
          blue: '0',
          image: '/image/projects/numbers.jpg',
        },
        {
          title: 'JiJi kides',
          description: 'User Experience - Human Center Design',
          red: '243',
          green: '221',
          blue: '27',
          image: '/image/projects/kitchen.jpg',
        },
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  &__header {
    z-index: 1;
    position: absolute;
    top: 0;
    width: 100%;
    color: #0466c8b8;
  }
}
</style>
