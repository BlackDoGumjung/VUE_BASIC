<template>
  <div>
    <div :class="{ 'text-red': hasError, active: isActive }">Class Binding</div>
    <!-- text-red 처럼 - 가 있으면 ''로 묶어줘야함 -->
    <div :class="class2">Class Binding2</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      hasError: false,
      class2: ['active', 'hasError'],
      // 배열 형식으로는 잘 사용하지 않음
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
.active {
  background-color: green;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
