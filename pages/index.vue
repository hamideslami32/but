<template>
	<div class="main">
		<div class="main__content">
			<Main v-if="data" :title="data.heroTitle" :description="data.description" />
		</div>
		<div
			v-for="(item, i) in projectPages"
			:key="`home-page-${i}`"
			class="main__projects"
		>
			<Project :id="String(i + 1)" :type="'home'" :item="item" />
		</div>
	</div>
</template>

<script>
export default {
	name: "HomePage",
	data() {
		return {
			data: null,
			projectPages: null,
		};
	},
	async asyncData({ $axios }) {
		const d = await $axios.$get("/home?populate[projects][populate]=*");
		const { projects, ...rest } = d.data?.attributes;
		return {
			data: rest,
			projectPages: projects
		};
	},
};
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
