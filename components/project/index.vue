<template>
	<div class="project-container" :style="backgroundImage">
		<div v-if="item.isNew" class="badge">NEW</div>
		<div
			class="project-container__content"
			:style="backgroundColor"
			@mouseleave="handlerHover"
			@mouseenter="handlerHover"
		>
			<div ref="title" class="project-container__content__text">
				<span class="project-container__content__text__index">{{ id }}</span>
				<span class="project-container__content__text__title">{{
					item.title
				}}</span>
				<span class="project-container__content__text__description mb-4">{{
					item.description
				}}</span>
				<ShareButton title="view project" :href="`/projects/${item.link ? item.link.link : '/'}`" />
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
		backgroundColor() {
			if (this.type === "home") {
				if (this.isHovered) {
					return {
						"background-color": this.item.color,
					};
				} else {
					return {
						"background-color": `${this.item.color}D9`,
					};
				}
			} else if (this.type === "graphic") {
				if (this.isHovered) {
					return {
						"background-color": this.item.color,
						width: "100%",
					};
				} else {
					return {
						"background-color": `${this.item.color}D9`,
						width: "50%",
					};
				}
			} else return "";
		},
	},
	methods: {
		handlerHover() {
			this.isHovered = !this.isHovered;
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
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		transition: 0.5s ease-in-out;
			// position: relative;
		&__text {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-left: 18%;
			// position: absolute;
			// left: 40%
			// margin: auto;
			&__index {
				font-size: 5rem;
				font-weight: 400;
			}
			&__title {
				font-size: 2.5rem;
				font-weight: 600;
			}
		}
	}
}
@media only screen and (max-width: 960px) {
	.project-container {
		&__content {
			width: 100% !important;
		}
	}
}
</style>
