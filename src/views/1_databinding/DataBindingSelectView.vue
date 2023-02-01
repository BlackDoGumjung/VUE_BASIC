<template>
  <div>
    <select nama="" id="" v-model="selectedCity">
      <option value=""></option>
      <option value="02">Seoul</option>
      <option value="051">Busan</option>
      <option value="064">Jeju</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedCity: '051', // 이미 사용자가 선택한 value가 들어와있는 상태인...
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
