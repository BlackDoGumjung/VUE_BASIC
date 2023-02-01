<template>
  <div>
    <div>
      <select name="" id="">
        <option :value="city.code" :key="city.code" v-for="city in cities">
          {{ city.title }}
        </option>
        <!-- 반복 v-for을 사용할 때는 key를 써줘야함,  -->
      </select>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>product no.</th>
            <th>product no.</th>
            <th>price</th>
            <th>quntity</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="drink.drinkId" v-for="drink in drinkList">
          <!-- 만약 key 값으로 쓸만한 게 없다면 :key="i" v-for="(drink, i) in drinkList"로 사용해도 됨 -->
            <td>{{ drink.drinkId }}</td>
            <td>{{ drink.drinkName }}</td>
            <td>{{ drink.drinkPrice }}</td>
            <td><input type="number" name="" id="" v-model="drink.qty" /></td>
            <!-- input에 양방향 데이터 바인딩을 사용해서 바로 수량과 금액을 곱해 반영할 수 있게 만듦 -->
            <td>{{ drink.price * drink.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cities: [
        { title: 'seoul', code: '02' },
        { title: 'busan', code: '051' },
        { title: 'jeju', code: '064' },
      ],
      drinkList: [
        {
          drinkId: '1',
          drinkName: 'Coke',
          price: 1100,
          qty: 1,
        },
        {
          drinkId: '1',
          drinkName: 'pepsi',
          price: 1500,
          qty: 1,
        },
        {
          drinkId: '1',
          drinkName: 'Cider',
          price: 1200,
          qty: 1,
        },
        {
          drinkId: '1',
          drinkName: 'Black Tea',
          price: 2000,
          qty: 1,
        },
      ],
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
