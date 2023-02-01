<template>
  <!-- HTML -->
  <div>
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
<script>
// JS
export default {
  data() {
    return {
      useName: 'Monkey D',
      message: '해적왕이 될 거얍',
      arr: [],
      obj: {},
    };
  },
};
</script>
<style scoped>
/* CSS 이 화면에만 적용해야할 때만 scoped 를 기재해줌 */
</style>
