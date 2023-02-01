<template>
  <!-- HTML -->
  <div>
    <div style="color: red; font-size: 30px">
      style Binding : text-red, font-size 30px
    </div>
    <div :style="style1">style Binding : text-green, font-size 30px</div>
    <button @click="style1.color = 'blue'"></button>
  </div>
</template>
<script>
// JS
export default {
  data() {
    return {
      style1: {
        color: 'green',
        fontSize: '30px',
      },
    };
  },
};
</script>
<style scoped>
/* CSS 이 화면에만 적용해야할 때만 scoped 를 기재해줌 */
</style>
