<template>
	<div class="main">
		<div class="main__content">
			<Main v-if="data"  :title="data.heroTitle" :description="data.description" />
		</div>
		<div
			v-for="(item, index) in projectPages"
			:key="`home-page-${index}`"
			class="main__projects"
		>
			<Project :id="index" :type="'home'" :item="item" />
		</div>
	</div>
</template>

<script>
export default {
	name: "HomePage",
	data() {
		return {
			data: null,
			projectPages: [],
		};
	},
	async created() {
		const d = await this.$axios.$get("/home?populate[projects][populate]=*");
		const {projects, ...rest} = d.data?.attributes;
		this.data = rest;
		this.projectPages = projects;
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
