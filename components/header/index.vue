<template>
  <div class="header">
    <div class="header__logo">
      <a href="/">
        <span>Vali Mohebbi</span>
      </a>
    </div>
    <div class="header__nav">
      <div
        v-for="(item, index) in navbarLinks"
        :key="`navbar-link-${index}`"
        class="header__nav__items"
      >
        <ShareNavbarBtn :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			navbarLinks: [
				{
					id: 0,
					title: "Product",
					href:"/"
				},
				{
					id: 1,
					title: "Ux",
					href:"/"
				},
				{
					id: 2,
					title: "Graphic",
					href:"/graphic"
				},
				{
					id: 3,
					title: "Research",
					href:"/research"
				},
				{
					id: 4,
					title: "CV",
					href:"/about"
				},
				{
					id: 5,
					title: "Contact",
					href:"/contact"
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 140px 0 140px;
  &__logo {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      font-weight: 500;
      font-size: 38px;
      color: #ffe500;
    }
  }
  &__nav {
    width: 40%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
@media only screen and (max-width: 960px){
.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  &__logo {
    width: 100%;
    justify-content: center;
    margin-top: 20px;
    span {
      font-weight: 500;
      font-size: 24px;
      color: #ffe23e;
    }
  }
  &__nav {
    width: 100%;
    justify-content: space-around;
  }
}
}
</style>
