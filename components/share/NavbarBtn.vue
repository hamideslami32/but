<template>
	<a :href="item.href" class="navbar-btn">
		<span :class="{'navbar-active': $route.path === item.href}">{{
			item.title
		}}</span>
	</a>
</template>

<script>
export default {
	name: "ShareNavbarBtn",
	props: {
		item: {
			type: Object,
			default: () => {},
		},
	},
	mounted() {
		console.log(this.$route.path, this.item.href);
		
	}
};
</script>

<style scoped>
	.navbar-btn {
		color: rgb(34, 33, 33);
		cursor: pointer;
		font-size: 18px;
		font-weight: 500;
		@media only screen and (max-width: 960px) {
			font-size: 14px;
		}
	}

	.navbar-active {
		border-bottom: 4px solid rgb(255, 244, 127);
	}
</style>
