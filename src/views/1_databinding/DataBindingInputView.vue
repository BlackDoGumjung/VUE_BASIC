<template>
  <div>
    <input type="text" v-model="userId" />
    <!-- v-model 은 양방향 데이터 어느 한쪽을 변경하더라도 키값만 읽어도 값을 가져올 수 있음  -->
    <button @click="myFunction">click</button>
    <button @click="ChangeData">change</button>
    <input type="text" v-model="num1" /> +
    <input type="text" v-model="num2" /> =
    <span>{{ num1 + num2 }}</span>
    <!-- 이 경우 input type이 text 이므로 의도한 계산값이 나오지 않고 string + string 으로 보임 -->
    <input type="text" v-model.number="num3" /> +
    <input type="text" v-model.number="num4" /> =
    <span>{{ num3 + num4 }}</span>
    <!-- v-model.number는 parseInt 같은 js 문법 없이 type을 넘버로 변경해줌 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: 'Luffy.go', // 사용자 입력값도 이 값과 관계없이 실시간으로 변경됨(wow),
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId);
    },
    changeData() {
      this.userId = 'SABO'
    }
  },
};
</script>
<style scoped>
/* CSS 이 화면에만 적용해야할 때만 scoped 를 기재해줌 */
</style>
