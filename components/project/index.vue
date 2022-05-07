<template>
	<div class="project-container" :style="backgroundImage">
		<div v-if="items.newLable" class="badge">NEW</div>
		<div
			class="project-container__content"
			:style="backgroundColor"
			@mouseleave="handlerHover"
			@mouseenter="handlerHover"
		>
			<div ref="title" class="project-container__content__text">
				<span class="project-container__content__text__index">{{ id }}</span>
				<span class="project-container__content__text__title">JiJi kides</span>
				<span class="project-container__content__text__description mb-4"
					>User Experience - Human Center Design</span
				>
				<ShareButton title="view project" href="/project" />
			</div>
		</div>
	</div>
</template>

<script>
// import anime from 'animejs'
export default {
	name: "ProjectsSection",
	props: {
		items: {
			type: Object,
			default: () => {},
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
			// animeInstant: null,
			// animationPlayed: false,
		};
	},
	computed: {
		backgroundImage() {
			return {
				"background-image": `url(${this.items.image})`,
			};
		},
		backgroundColor() {
			if (this.type === "home") {
				if (this.isHovered) {
					return {
						"background-color": `rgba(${this.items.red},${this.items.green},${this.items.blue},1)`,
					};
				} else {
					return {
						"background-color": `rgba(${this.items.red},${this.items.green},${this.items.blue},0.85)`,
					};
				}
			} else if (this.type === "graphic") {
				if (this.isHovered) {
					return {
						"background-color": `rgba(${this.items.red},${this.items.green},${this.items.blue},0.9)`,
						width: "100%",
					};
				} else {
					return {
						"background-color": `rgba(${this.items.red},${this.items.green},${this.items.blue},1)`,
						width: "50%",
					};
				}
			} else return "";
		},
	},
	mounted() {
		// this.animeInstant = anime({
		//   targets: this.$refs.title,
		//   translateX: ['-100px', '0px'],
		//   opacity: [0, 1],
		//   autoplay: false,
		//   duration: 1000,
		// })
	},
	methods: {
		handlerHover() {
			this.isHovered = !this.isHovered;
		},
		// startAnimation(entries) {
		//   if (!this.animationPlayed && entries[0].isIntersecting) {
		//     this.animeInstant.play()
		//     this.animationPlayed = true
		//   }
		// },
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
		&__text {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin: auto;
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
