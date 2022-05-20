<template>
	<div class="main">
		<div class="main__content  container m-auto">
			<span class="main__content__title">{{title}}</span>
			<div class="main__content__description">
				<span
					>{{description}}</span
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			required: true,
		},
		description: {
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.main {
	width: 100%;
	height: 1000px;
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	background-image: url("/image/homepage-desktop.png");
	background-position: center;
	background-size: cover;
	&__content {
		margin-bottom: 300px;
		color: rgb(56, 55, 55);
		&__title {
			font-size: 80px;
			font-weight: bold;
		}
		&__description {
			width: 500px;
			font-size: 18px;
		}
	}
}
@media only screen and (max-width: 1054px) {
	.main {
		width: 100%;
		height: 70vh;
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
		padding: 20px;
		&__content {
			margin-bottom: 70px;
			width: 100%;
			height: 40%;
			color: rgb(56, 55, 55);
			&__title {
				font-size: 40px;
				font-weight: 500;
			}
			&__description {
				width: 100%;
			}
		}
	}
}
</style>
