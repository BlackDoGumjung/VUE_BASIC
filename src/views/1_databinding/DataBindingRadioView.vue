<template>
  <div>
    <div>
      <input
        type="radio"
        name=""
        id="html"
        value="HTML"
        v-model="favoriteLang"
      />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" name="" id="css" value="css" v-model="favoriteLang" />
      <label for="css">css</label>
    </div>
    <div>
      <input type="radio" name="" id="js" value="js" v-model="favoriteLang" />
      <label for="js">js</label>
    </div>
    <div>선택한 언어 : {{ favoriteLang }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      favoriteLang: '', // radio는 하나만 선택할 수 있으므로 문자열 상태로 들어가야함
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
