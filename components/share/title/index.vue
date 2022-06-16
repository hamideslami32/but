<template>
	<div class="title">
		<div class="title__content container m-auto">
			<a class="title__content__btn" href="/">
				<i class="ri-arrow-left-line mr-1"></i>
				{{ goBack }}
			</a>
			<span class="title__content__text">
				{{ description }}
			</span>
		</div>
		<div class="title__page-title">
			<span class="title__page-title__text">
				{{ pageTitle }}
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "Title",
	props: {
		description: {
			type: String,
			default: "",
		},
		pageTitle: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			goBack: "Back To Home",
		};
	},
};
</script>

<style lang="scss" scoped>
.title {
	margin: 64px 20px 0;
	@media screen and (max-width: 768px) {
		margin: 32px 20px 0;
	}
	&__content {
		display: flex;
		flex-direction: column;
		// margin: 90px 140px 0 140px;
		&__btn {
			font-weight: 200;
			display: flex;
			align-items: center;
			i {
				font-weight: bold;
				font-size: 24px;
			}
		}
		&__text {
			font-size: 40px;
			font-weight: 500;
			margin-top: 20px;
		}
	}
	&__page-title {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 80px 0 90px 0;
		font-size: 60px;
		font-weight: 500;
	}
}
@media only screen and (max-width: 960px) {
	.title {
		margin-top: 30px;
		&__content {
			display: flex;
			flex-direction: column;
		}
		&__page-title {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 40px;
			font-weight: 500;
		}
	}
}
</style>
