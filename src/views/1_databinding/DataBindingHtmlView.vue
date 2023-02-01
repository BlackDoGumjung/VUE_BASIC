<template>
  <div>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
    <!-- html tag 자체를 넣어줘야할 때는 v-html (js의 innerHtml과 같은 기능) -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      htmlString: '<p style="color:red">Red String</p>',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped>
/* CSS 이 화면에만 적용해야할 때만 scoped 를 기재해줌 */
</style>
