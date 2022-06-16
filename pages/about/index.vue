<template>
	<div class="about-us">
		<ShareTitle :description="aboutData.heroTitle" :page-title="pageTitle" />
		<div class="about-us__container">
			<div class="about-us__container__pet">
				<div class="about-us__container__pet__description">
					<div class="about-us__container__pet__description__first-text">
						<span>{{ hero.firstText }}</span>
						<!-- <img src="/font/arrow-back.svg" alt="arrow" /> -->
					</div>
				</div>
				<div class="about-us__container__pet__image">
					<img
						:src="`https://valimohebbi.com/strapi${hero.firstImage.data.attributes.url}`"
						alt="avatar"
						width="100%"
					/>
				</div>

				<!-- <div class="about-us__container__pet__image" :style="{BackgroundImage: `url('https://valimohebbi.com/strapi${hero.firstImage.data.attributes.url}')`}"></div> -->
			</div>
			<div class="about-us__container__avatar">
				<div class="about-us__container__avatar__image">
					<img
						:src="`https://valimohebbi.com/strapi${hero.secondImage.data.attributes.url}`"
						alt="avatar"
						width="100%"
					/>
				</div>
				<div class="about-us__container__avatar__description">
					<span>{{ hero.secondText }}</span>
				</div>
			</div>
			<div class="about-us__container__info">
				<span class="about-us__container__info__title">{{
					aboutData.summaryTitle
				}}</span>
				<span class="about-us__container__info__desc">{{ aboutData.summary }}</span>
			</div>
			<div class="about-us__container__cv">
				<span>CV</span>
				<div class="about-us__container__cv__content">
					<div v-for="(image, i) in aboutData.cvImages.data" :key="i">
						<img
							:src="`https://valimohebbi.com/strapi${image.attributes.url}`"
							:alt="`cv-image-page${i}`"
						/>
					</div>
				</div>
				<div class="about-us__container__cv__download-btn">
					<a :href="aboutData.cvLink" download>Download CV</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AboutUs",
	data() {
		return {
			aboutData: null,
			pageTitle: "About .",
			hero: null,
		};
	},
	async asyncData({ $axios }) {
		const d = await $axios.$get(
			"/cv?populate[hero][populate]=*&populate[cvImages]=*"
		);
		const { hero, ...rest } = d.data.attributes;
		return {
			aboutData: rest,
			hero,
		};
	},
};
</script>

<style lang="scss" scoped>
.about-us {
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: #fafafa;
	&__container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		&__pet {
			display: flex;
			width: 100%;
			height: 800px;
			&__description {
				width: 50%;
				background-color: #ffe500;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #333;
				flex-direction: column;
				&__first-text {
					display: flex;
					align-items: center;
					margin-left: calc(100% - (1536px / 2));
					@media screen and (max-width: 1536px) {
						margin-left: 32px;
					}
					img {
						transform: rotate(-90deg);
					}
				}
				span {
					font-size: 54px;
					font-weight: 500;
					position: relative;
				}
			}
			&__image {
				width: 50%;
				background-image: url("/image/goat/ray-aucott-xB0e8bDV4ww-unsplash@3x.png");
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;
			}
		}
		&__avatar {
			display: flex;
			width: 100%;
			&__description {
				width: 50%;
				background-color: #000;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #fff;
				span {
					// margin-right: calc(100% - (1536px / 2));
					// @media screen and (max-width: 1536px) {
					// 	margin-right: 32px;
					// }

					font-size: 80px;
					font-weight: 500;
				}
			}
			&__image {
				width: 50%;
				// height: ;
				img {
					width: 100%;
					object-fit: cover;
					height: 100%;
				}
			}
		}
		&__info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin: 64px 0 64px 0;
			width: 60%;
			&__title {
				font-size: 56px;
				font-weight: 500;
			}
			&__desc {
				font-size: 16px;
				margin-top: 40px;
			}
		}
		&__cv {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			span {
				font-size: 56px;
				font-weight: 500;
				color: #333;
				margin: 64px 0 32px 0;
				width: 60%;
			}
			&__content {
				width: 100%;
				display: flex;
				flex-direction: column;
				height: auto;
				background-color: #000;
				justify-content: center;
				align-items: center;
				& > * {
					margin-bottom: 30px;
				}
			}
			&__download-btn {
				height: 175px;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				a {
					width: 267px;
					height: 64px;
					border: 1px solid #000;
					display: flex;
					justify-content: center;
					align-items: center;
					transition: 0.2s ease-in;
					&:hover {
						background: #d1d1d1;
						border: none;
						color: #fff;
					}
				}
			}
		}
	}
}
@media only screen and (max-width: 1536px) {
	.about-us {
		&__container {
			&__pet {
				height: auto;
				&__image {
					width: 50%;
					background-image: url("/image/goat/ray-aucott-xB0e8bDV4ww-unsplash.png");
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
				}
			}
			&__avatar {
				display: flex;
				width: 100%;
				height: 300px;
			}
		}
	}
}

@media only screen and (max-width: 960px) {
	.about-us {
		&__container {
			&__pet {
				flex-direction: column-reverse;
				height: auto;
				&__description {
					width: 100%;
					height: 294px;
					justify-content: center;
					&__first-text {
						width: 60%;
						span {
							font-size: 20px;
						}
					}
				}
				&__image {
					height: 375px;
					width: 100%;	
					background-image: url("/image/goat/ray-aucott-xB0e8bDV4ww-unsplash.png");
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
				}
			}
			&__avatar {
				flex-direction: column-reverse;
				width: 100%;
				height: auto;
				&__description {
					width: 100%;
					height: 204px;
					display: flex;
					align-items: center;
					justify-content: center;
					&__first-text {
						width: 100%;
						span {
							font-size: 54px;
						}
					}
				}
				&__image {
					width: 100%;
					height: 204px;
					img {
						width: 100%;
						height: 100% !important;
					}
				}
			}
			&__info {
				margin: 32px 0 64px;
				width: 95%;
				&__title {
					font-size: 34px;
				}
				&__desc {
					font-size: 14px;
					margin-top: 16px;
					word-break: break-all;
				}
			}
			&__cv {
				span {
					font-size: 34px;
					margin: 0 0 32px 0;
					width: 95%;
				}
				&__content {
					height: 680px;
				}
				&__download-btn {
					height: 100px;
				}
			}
		}
	}
}
@media only screen and (max-width: 600px) {
	.about-us {
		&__container {
			&__pet {
				flex-direction: column-reverse;
				height: 800px;
				&__description {
					height: 40%;
					span {
						font-size: 20px;
					}
				}
				&__image {
					height: 60%;
				}
			}
			&__avatar {
				flex-direction: column-reverse;
				width: 100%;
				// height: 500px;
			}
		}
	}
}
</style>
