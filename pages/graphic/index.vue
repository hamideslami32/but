<template>
	<div class="graphic">
		<ShareTitle :description="graphicData.heroTitle" :page-title="pageTitle" />
		<div class="graphic__content">
			<div
				v-for="(item, index) in graphicProjects"
				:key="`graphic-page-${index}`"
				class="graphic__content__projects"
			>
				<Project :id="index+1" :item="item" :type="'graphic'" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "GraphicPage",
	data() {
		return {
			pageTitle: "Graphic .",
			graphicProjects: null,
			graphicData: null,
		};
	},
	async asyncData({$axios}) {
		const d = await $axios.$get(
			"/graphic?populate[graphicProjects][populate]=*"
		);
		const { graphicProjects, ...rest } = d.data?.attributes;
		return {
			graphicData: rest,
			graphicProjects: graphicProjects
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
		// margin: 100px 140px 0 140px;
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
