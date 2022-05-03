<template>
  <a :href="item.href">
    <button class="navbar-btn">{{ item.title }}</button>
  </a>
</template>

<script>
export default {
  name: 'ShareNavbarBtn',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.navbar-btn {
  border: none;
  color: rgb(34, 33, 33);
  cursor: pointer;
  display: inline-block;
  font-family: 'BenchNine', Arial, sans-serif;
  font-size: 18px;
  line-height: 1em;
  outline: none;
  position: relative;
  font-weight: 500;
  @media only screen and (max-width: 960px){
    font-size: 14px;
  }
}
.navbar-btn::before,
.navbar-btn::after {
  border-color: transparent;
  transition: all 0.25s;
  border-style: solid;
  border-width: 0;
  content: '';
  height: 24px;
  position: absolute;
  width: 0;
}
.navbar-btn::before {
  border-color: #ffe23e;
  left: 0;
  top: -5px;
}
.navbar-btn::after {
  border-bottom-width: 3px;
  border-color: #ffe23e;
  bottom: -5px;
  right: 0;
}

.navbar-btn:hover::before,
.navbar-btn.hover::before,
.navbar-btn:hover::after,
.navbar-btn.hover::after {
  height: 100%;
  width: 100%;
}

</style>
