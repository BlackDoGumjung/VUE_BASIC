<template>
  <!-- HTML -->
  <div>
    <button @click="increseCounter">Add+1</button>
    <p>{{ counter }}</p>
  </div>
</template>
<script>
// JS
export default {
  data() {
    return {
      counter: 0,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    increaseCounter() {
      this.counter += 1;
    },
  },
};
</script>
<style scoped>
/* CSS 이 화면에만 적용해야할 때만 scoped 를 기재해줌 */
</style>
