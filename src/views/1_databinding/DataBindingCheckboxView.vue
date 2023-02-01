<template>
  <div>
    <div>
      <input
        type="checkbox"
        name=""
        id="html"
        value="HTML"
        v-model="favoriteLang"
      />
      <label for="html">HTML</label>
    </div>
    <div>
      <input
        type="checkbox"
        name=""
        id="css"
        value="css"
        v-model="favoriteLang"
      />
      <label for="css">css</label>
    </div>
    <div>
      <input
        type="checkbox"
        name=""
        id="js"
        value="js"
        v-model="favoriteLang"
      />
      <label for="js">js</label>
    </div>
    <div>선택한 언어 : {{ favoriteLang }}</div>
  </div>
  <!-- checkbox는 셀렉트나 인풋과 달리 value 값 변경을 하는 게 아니고, checked 속성의 true/false값만 변경하는 셈이 됨 -->
</template>
<script>
export default {
  data() {
    return {
      favoriteLang: ['JS'], // 체크박스는 여러 건을 선택할 수 있기 때문에 배열로 선언해야함!, 처음에 값이 정해져있는 상태라면 체크박스에 클릭이 된 채로 나오게 됨
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
