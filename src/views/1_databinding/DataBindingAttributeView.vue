<template>
  <div>
    <input type="text" name="" id="" v-bind:value="userId" readonly />
    <!-- readonly일 때는 v-model을 사용하면 오히려 위험함, v-bind는 단방향 바인딩에만 이용 -->
    <!-- v-bind는 생략이 가능하므로 v-bind:value >> :value 로 사용 가능 -->
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
    <!-- 이미지의 데이터 바인딩도 가능 (변경할 필요 없으므로 단방향으로...) -->
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">Search</button>
    <!-- 버튼의 txt1 값이 비어있을 경우는 disabled -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: '',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
      txt1: '',
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
