<template>
	<div class="research" v-if="researchData">
		<ShareTitle :description="researchData.heroTitle" :page-title="pageTitle" />
		<div class="research__content">
			<div
				v-for="(item, i) in sections"
				:key="i"
				class="research__content__description"
			>
				<h2 class="research__content__description__title">{{ item.title }}</h2>
				<span v-for="(link, j) in item.links" :key="j">
					<a :href="link.link">
						<span>- {{ link.text }}</span>
					</a>
				</span>
				<div class="research__content__description__border"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Research",
	data() {
		return {
			researchData: null,
			pageTitle: "Research .",
			sections: null,
		};
	},
	async created() {
		const d = await this.$axios.$get("/research?populate[sections][populate]=*");
		const { sections, ...rest } = d.data?.attributes;
		this.researchData = rest;
		this.sections = sections;
	},
};
</script>
<style lang="scss" scoped>
.research {
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: #fafafa;
	&__title {
		font-size: 20px;
		font-weight: 500;
		width: 100%;
		padding: 0 100px 70px 100px;
		color: #707070;
	}
	&__content {
		color: #333;
		margin: 0 100px 100px 100px;

		&__description {
			display: flex;
			flex-direction: column;
			margin-bottom: 40px;
			a {
				text-decoration: underline;
				display: block;
				margin-bottom: 10px;
			}

			&__title {
				font-size: 60px;
				font-weight: 500;
			}
			&__border {
				width: 50%;
				margin-top: 10px;
				border-top: 1px solid #416bf0;
			}
		}
	}
}
@media only screen and (max-width: 960px) {
	.research {
		&__title {
			font-size: 14px;
			font-weight: 500;
			width: 100%;
			padding: 0 16px 24px 16px;
			color: #707070;
		}
		&__content {
			color: #333;
			margin: 0 16px 100px 16px;

			&__description {
				display: flex;
				flex-direction: column;
				margin-bottom: 40px;

				&__title {
					font-size: 60px;
					font-weight: 500;
				}
				&__border {
					width: 50%;
					margin-top: 10px;
					border-top: 1px solid #416bf0;
				}
			}
		}
	}
}
</style>
