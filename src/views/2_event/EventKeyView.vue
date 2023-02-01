<template>
  <div>
    <!-- <input
      type="search"
      name=""
      id=""
      @keyup.enter="checkEnter($event)"
      v-model="searchText"
    /> -->
    <input
      type="search"
      name=""
      id=""
      @keyup.enter="doSearch"
      v-model="searchText"
    />
    <button type="submit" @click.prevent="doSearch">submit</button>
    <!-- key Event에서 엔터를 쳤을 때만 doSearch함수를 호출... -->
    <!-- @keyup.뭐뭐 어떤 키가 눌렸는지에 따라 바로 함수 호출이 가능하다!!! -->
    <!-- .enter / .tab / .delete / .esc / .space / .up / .down / .left / .right / .stop (= event.stopPropagation) .prevent (= event.preventDefault)-->
    <button @click="doSearch">search</button>
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
    doSearch() {
      console.log(this.searchText);
    },
    checkEnter(event) {
      if (event.keyCode === 13) {
        // 현재 사용하고 있는 키가 뭔지 설정할 수 있어서 굳이 이런 함수가 필요없음...!!!
        this.doSearch();
      }
    },
  },
};
</script>
<style scoped>
/* CSS 이 화면에만 적용해야할 때만 scoped 를 기재해줌 */
</style>
