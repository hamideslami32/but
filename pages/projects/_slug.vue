<template>
	<div class="project">
		<div class="container mx-auto">
			<div class="project__header">
				<a href="/"><i class="ri-arrow-left-line mr-1"></i>Back to Home</a>
				<h1>{{ projectData.title }}</h1>
				<p>
					{{ projectData.description }}
				</p>
			</div>
		</div>
		<!-- <video
			:src="projectData.media.data[0].attributes.url"
			class="project__video"
			controls
		></video> -->
		<img
			:src="`https://valimohebbi.com/strapi/${projectData.media.data[0].attributes.url}`"
			alt="media-one"
		/>
		<div class="project__quotes px-4">
			<div
				class="project__quotes__quote"
				v-for="(section, index) in projectData.sections"
				:key="index"
			>
				<h2>{{ section.title }}</h2>
				<p>
					{{ section.description }}
				</p>
			</div>
		</div>
		<div class="project__images">
			<img
				v-for="n in 2"
				:key="n"
				:src="`https://valimohebbi.com/strapi/${projectData.secondMedia.data[0].attributes.url}`"
				alt=""
			/>
		</div>
		<div class="container mx-auto">
			<div class="project__content px-4">
				<div v-for="(section, index) in projectData.secondSections" :key="index">
					<h2>{{ section.title }}</h2>
					<p>
						{{ section.description }}
					</p>
				</div>
			</div>
		</div>
		<div class="project__big-image">
			<img
				:src="`https://valimohebbi.com/strapi/${projectData.thirdMedia.data[0].attributes.url}`"
				alt="img"
			/>
		</div>
		<div>
			<div
				class="project__image-quote"
				:class="{ 'project__image-quote--right': index === 1 }"
				v-for="(photoText, index) in projectData.projectPhotoText"
				:key="index"
			>
				<img
					:src="`https://valimohebbi.com/strapi/${photoText.media.data.attributes.url}`"
					alt=""
				/>
				<div class="project__image-quote__content">
					<h2>{{ photoText.title }}</h2>
					<p>
						{{ photoText.description }}
					</p>
				</div>
			</div>
		</div>
		<div class="project__album">
			<div class="container mx-auto">
				<h3>The Project Album</h3>
			</div>
			<div class="project__album__images">
				<img
					v-for="(photo, index) in projectData.album.data"
					:key="index"
					:src="`https://valimohebbi.com/strapi/${photo.attributes.url}`"
					alt=""
				/>
				<!-- <img src="/image/projects/app.jpg" alt="" />
				<img src="/image/projects/alphabet.jpg" alt="" />
				<img src="https://via.placeholder.com/1000/008000" alt="" /> -->
			</div>
		</div>
		<div class="project__download-book">
			<a :href="projectData.bookLink" download>Download Project Book</a>
		</div>

		<div class="container mx-auto mb-16" v-if="projectData.otherProjects.length">
			<div class="project__footprint">
				<span><i class="ri-arrow-right-line"></i>&nbsp; Other Projects: </span>
				<ul>
					<li
						v-for="(project, index) in projectData.otherProjects"
						:key="`project-${index}`"
						class="my-4"
					>
						<a :href="project.link">{{ project.text }}</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ payload, $axios, route }) {
		if (payload) return { projectData: payload };
		else {
			const t = await $axios.get(
				`https://valimohebbi.com/strapi/api/projects?filters[slug][$eq]=${route.params.slug}&populate[media][populate]=*&populate[sections][populate]=*&populate[secondMedia][populate]=*&populate[secondSections][populate]=*&populate[thirdMedia][populate]=*&populate[projectPhotoText][populate]=*&populate[album][populate]=*&populate[otherProjects][populate]=*`
			);
			return { projectData: t.data.data[0].attributes };
		}
	},
};
</script>

<style lang="scss" scoped>
.project {
	& img {
		object-fit: cover;
	}
	&__header {
		padding: 65px 16px 0 41px;
		@media screen and (max-width: 768px) {
			padding: 32px 16px 0;
		}
		a {
			font-size: 18px;
			line-height: 24px;
			font-weight: 300;
			color: #707070;
			display: flex;
			vertical-align: middle;
			i {
				color: #000;
				font-size: 24px;
			}
		}
		h1 {
			margin-top: 40px;
			font-size: 60px;
			font-weight: bold;
			color: #333;

			@media screen and (max-width: 768px) {
				font-size: 24px;
			}
		}
		p {
			margin-bottom: 32px;
			font-size: 20px;
			color: #707070;
			text-align: justify;
			@media screen and (max-width: 768px) {
				font-size: 14px;
			}
		}
	}
	&__video {
		height: calc(100vh - 100px);
		width: 100%;
	}
	&__quotes {
		padding-top: 40px;
		padding-bottom: 30px;
		display: grid;
		grid-template-columns: repeat(2, 360px);
		grid-auto-rows: 180px;
		justify-content: center;
		width: 100%;
		grid-row-gap: 20px;
		grid-column-gap: 200px;
		&__quote {
			overflow: hidden;
			width: 100%;
			height: 100%;
			h2 {
				font-size: 18px;
				font-weight: bold;
				color: #333;
			}
			p {
				font-size: 20px;
				color: #707070;
				text-align: justify;
				@media screen and (max-width: 768px) {
					font-size: 14px;
				}
			}
		}
		@media only screen and (max-width: 960px) {
			grid-template-columns: auto;
			grid-auto-rows: auto;
		}
	}
	&__images {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		height: 690px;
		img {
			height: 100%;
			width: 100%;
		}
		@media only screen and (max-width: 960px) {
			grid-template-columns: 1fr;
			height: auto;
		}
	}
	&__content {
		padding-top: 60px;
		padding-bottom: 60px;
		@media screen and (max-width: 768px) {
			padding-top: 32px;
			padding-bottom: 32px;
		}
		h2 {
			font-size: 60px;
			font-weight: bold;
			color: #333;
			margin-top: 12px;
			@media screen and (max-width: 768px) {
				font-size: 24px;
			}
		}
		p {
			font-size: 20px;
			color: #707070;
			margin-top: 12px;
			text-align: justify;
			@media screen and (max-width: 768px) {
				font-size: 14px;
			}
		}
	}
	&__big-image {
		width: 100%;
		height: 100vh;
		img {
			width: 100%;
			height: 100%;
		}
	}
	&__image-quote {
		display: flex;
		height: 100vh;
		img {
			width: calc(50% - 64px);
			height: 100%;
		}
		&__content {
			width: calc(50% + 64px);
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: 64px 160px 64px 64px;
			text-align: justify;
			h2 {
				font-size: 60px;
				font-weight: bold;
				color: #333;
				@media screen and (max-width: 768px) {
					font-size: 24px;
				}
			}
			p {
				margin-top: 12px;
				font-size: 20px;
				color: #707070;
				@media screen and (max-width: 768px) {
					font-size: 14px;
				}
			}
		}
		&--right {
			flex-direction: row-reverse;

			.project__image-quote__content {
				padding: 64px 64px 64px 160px;
				text-align: justify;
			}
		}

		@media only screen and (max-width: 960px) {
			height: auto;
			flex-direction: column;
			img {
				width: 100%;
				height: auto;
			}
			&__content {
				width: 100%;
			}
			&, &--right {
				.project__image-quote__content {
					padding: 20px;
				}
			}
		}
	}
	&__album {
		h3 {
			padding: 16px 0;
			margin-top: 130px;
			margin-bottom: 60px;
			font-size: 40px;
			font-weight: bold;
			color: #333;
			@media screen and (max-width: 768px) {
				margin: 32px 0 12px 0;
			}
		}
		&__images {
			display: grid;
			grid-template-rows: repeat(2, calc((100vh - 40px) / 2));
			grid-template-columns: repeat(3, 1fr);
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				&:first-of-type {
					grid-column: span 3;
				}
			}

			@media only screen and (max-width: 960px) {
				grid-template-rows: repeat(2, 1fr);
				grid-template-columns: repeat(2, 1fr);
				img:first-of-type {
					grid-column: unset;
				}
			}
		}
	}
	&__download-book {
		padding-top: 64px;
		padding-bottom: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		a {
			width: 267px;
			height: 64px;
			text-align: center;
			line-height: 64px;
			border: 1px solid #333;
			color: #333;
			background-color: transparent;
			font-size: 18px;
			font-weight: 500;
		}
	}
	&__footprint {
		padding: 0 16px;
		span {
			font-size: 18px;
			font-weight: 300;
			color: #707070;
			line-height: 24px;
			display: flex;
			vertical-align: middle;
			i {
				color: #000;
				font-size: 24px;
			}
		}
		ul li a {
			font-size: 50px;
			color: #707070;
			display: inline-block;
			position: relative;
			&::before,
			&::after {
				border-color: transparent;
				transition: all 0.25s;
				border-style: solid;
				border-width: 0;
				content: "";
				height: 24px;
				position: absolute;
				width: 0;
			}
			&::before {
				border-color: #ffe23e;
				left: 0;
				top: -5px;
			}
			&::after {
				border-bottom-width: 3px;
				border-color: #ffe23e;
				bottom: -5px;
				right: 0;
			}

			&:hover::before,
			&.hover::before,
			&:hover::after,
			&.hover::after {
				height: 100%;
				width: 100%;
			}
		}
	}
}
</style>
