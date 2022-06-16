<template>
	<div class="project-container" :style="backgroundImage">
		<div v-if="item.isNew" class="badge">NEW</div>
		<div
			:style="color"
			class="project-container__content container"
			@mouseleave="handlerHover(false)"
			@mouseenter="handlerHover(true)"
		>
			<div ref="title" class="project-container__content__text">
				<!-- <span class="project-container__content__text__index">{{ id }}</span> -->
				<span class="project-container__content__text__title">{{
					item.title
				}}</span>
				<span class="project-container__content__text__description mb-4">{{
					item.description
				}}</span>
				<ShareButton
					class="project-container__content__text__button"
					title="view project"
					:href="`/projects/${item.link ? item.link.link : '/'}`"
				/>
			</div>
		</div>
	</div>
</template>

<script>
// import anime from 'animejs'
export default {
	name: "ProjectsSection",
	props: {
		item: {
			type: Object,
			required: true,
		},
		id: {
			type: String,
			default: "",
		},
		type: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			isHovered: false,
		};
	},
	computed: {
		backgroundImage() {
			return {
				"background-image": `url(https://valimohebbi.com/strapi${this.item?.bgImage?.data?.attributes?.url})`,
			};
		},
		color() {
			return `
				color: ${this.item?.color} 
			`;
		},
	},
	methods: {
		handlerHover(val) {
			this.isHovered = val;
		},
	},
};
</script>

<style lang="scss" scoped>
.project-container {
	width: 100%;
	height: 100vh;
	color: #fff;
	position: relative;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;

	.badge {
		width: 70px;
		height: 30px;
		border-radius: 15px;
		background-color: #fff;
		color: #000;
		position: absolute;
		top: 100px;
		right: 140px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
	}
	&__content {
		transition: 0.5s ease-in-out;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-left: 153px;
		@media screen and (max-width: 768px) {
			align-items: center;
			margin-left: 0;
		}
		&__text {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			margin-left: 0;
			@media screen and (max-width: 768px) {
				padding-left: 53px;
				width: calc(100% - 20px);
			}

			&__index {
				font-size: 5rem;
				font-weight: 400;
			}
			&__title {
				font-size: 60px;
				font-weight: 600;
				@media screen and (max-width: 768px) {
					font-size: 44px;
				}
			}
			&__description {
				width: 100%;
				font-size: 20px;
				font-weight: 400;
				@media screen and (max-width: 768px) {
					font-size: 14px;
				}
			}
			&__button {
				font-size: 18px;
			}
		}
	}
}
</style>
