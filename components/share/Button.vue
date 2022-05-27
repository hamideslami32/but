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
    background: linear-gradient(45deg, rgba(184,67,67,1) 0%, rgba(243,221,27,1) 60%);
    // border: none;
    transition: 1.5s ease-in-out;
  }
}
</style>
