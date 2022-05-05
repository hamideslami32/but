<template>
  <div class="graphic">
    <ShareTitle :description="description" :page-title="pageTitle" />
    <div class="graphic__content">
      <div
        v-for="(item, index) in projectPages"
        :key="`graphic-page-${index}`"
        class="graphic__content__projects"
      >
        <Project :id="`0${index + 1}`" :items="item" :type="'graphic'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "GraphicPage",
	data() {
		return {
			goBack: "Back To Home",
			pageTitle: "Graphic .",
			description: "Lets Know More Each Others ;)",
			projectPages: [
				{
					title: "JiJi kides",
					description: "User Experience - Human Center Design",
					red: "38",
					green: "62",
					blue: "189",
					image: "/image/projects/think.jpg",
					newLable: true
				},
				{
					title: "JiJi kides",
					description: "User Experience - Human Center Design",
					red: "231",
					green: "159",
					blue: "159",
					image: "/image/projects/app.jpg",
				},
				{
					title: "JiJi kides",
					description: "User Experience - Human Center Design",
					red: "0",
					green: "0",
					blue: "0",
					image: "/image/projects/type.jpg",
				},
				{
					title: "JiJi kides",
					description: "User Experience - Human Center Design",
					red: "255",
					green: "0",
					blue: "0",
					image: "/image/projects/numbers.jpg",
				},
				{
					title: "JiJi kides",
					description: "User Experience - Human Center Design",
					red: "243",
					green: "221",
					blue: "27",
					image: "/image/projects/kitchen.jpg",
				},
			],
		};
	},
};
</script>
<style lang="scss" scoped>
.graphic {
  display: flex;
  flex-direction: column;
  width: 100%;
  &__title {
    display: flex;
    flex-direction: column;
    margin: 100px 140px 0 140px;
    &__btn {
      font-weight: 200;
    }
    &__text {
      font-size: 40px;
      font-weight: 500;
      margin: 20px 0 0 0;
    }
  }
}
</style>
