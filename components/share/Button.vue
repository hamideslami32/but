<template>
  <a :href="link" class="main-btn">view project</a>
</template>

<script>
export default {
	name: "ShareBtn",
	props: {
		link: {
			type: String,
			default: "/",
		},
	}
};
</script>

<style lang="scss" scoped>
.main-btn {
  width: 267px;
  height: 64px;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background: linear-gradient(90deg, rgba(83,7,7,1) 0%, rgba(112,17,17,1) 35%, rgba(217,21,21,1) 100%);
    // border: none;
    transition: 1.5s ease-in-out;
  }
}
</style>
